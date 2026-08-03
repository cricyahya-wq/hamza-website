import { Pool } from "pg";
import { env } from "../config/env";
import { logger } from "../utils/logger";

export const pool = new Pool({
  connectionString: env.DATABASE_URL,
  ssl: env.DATABASE_SSL ? { rejectUnauthorized: false } : undefined,
  max: 10,
  idleTimeoutMillis: 30_000,
  connectionTimeoutMillis: 5_000,
});

pool.on("error", (error) => {
  logger.error({ err: error }, "Unexpected error on idle PostgreSQL client");
});

export async function checkDatabaseConnection(): Promise<boolean> {
  try {
    await pool.query("SELECT 1");
    return true;
  } catch (error) {
    logger.error({ err: error }, "Database health check failed");
    return false;
  }
}
