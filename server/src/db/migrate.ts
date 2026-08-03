import fs from "node:fs";
import path from "node:path";
import { pool } from "./pool";
import { logger } from "../utils/logger";

async function ensureMigrationsTable(): Promise<void> {
  await pool.query(`
    CREATE TABLE IF NOT EXISTS schema_migrations (
      name TEXT PRIMARY KEY,
      applied_at TIMESTAMPTZ NOT NULL DEFAULT now()
    );
  `);
}

async function getAppliedMigrations(): Promise<Set<string>> {
  const result = await pool.query<{ name: string }>("SELECT name FROM schema_migrations");
  return new Set(result.rows.map((row) => row.name));
}

async function runMigrations(): Promise<void> {
  const migrationsDir = path.join(__dirname, "migrations");
  const files = fs
    .readdirSync(migrationsDir)
    .filter((file) => file.endsWith(".sql"))
    .sort();

  await ensureMigrationsTable();
  const applied = await getAppliedMigrations();

  for (const file of files) {
    if (applied.has(file)) {
      logger.info(`Skipping already-applied migration: ${file}`);
      continue;
    }

    const sql = fs.readFileSync(path.join(migrationsDir, file), "utf-8");
    const client = await pool.connect();
    try {
      await client.query("BEGIN");
      await client.query(sql);
      await client.query("INSERT INTO schema_migrations (name) VALUES ($1)", [file]);
      await client.query("COMMIT");
      logger.info(`Applied migration: ${file}`);
    } catch (error) {
      await client.query("ROLLBACK");
      throw error;
    } finally {
      client.release();
    }
  }
}

runMigrations()
  .then(async () => {
    logger.info("Migrations complete");
    await pool.end();
  })
  .catch(async (error: unknown) => {
    logger.error({ err: error }, "Migration failed");
    await pool.end();
    process.exit(1);
  });
