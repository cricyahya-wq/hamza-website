import { createApp } from "./app";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import { pool } from "./db/pool";

const app = createApp();

const server = app.listen(env.PORT, env.HOST, () => {
  logger.info(`MoosePBX API listening on http://${env.HOST}:${env.PORT}`);
});

async function shutdown(signal: string): Promise<void> {
  logger.info(`Received ${signal}, shutting down gracefully...`);

  server.close(async (err) => {
    if (err) {
      logger.error({ err }, "Error while closing HTTP server");
    }

    try {
      await pool.end();
      logger.info("Database pool closed. Goodbye.");
      process.exit(err ? 1 : 0);
    } catch (poolError) {
      logger.error({ err: poolError }, "Error while closing database pool");
      process.exit(1);
    }
  });

  setTimeout(() => {
    logger.error("Forced shutdown after timeout");
    process.exit(1);
  }, 10_000).unref();
}

process.on("SIGTERM", () => void shutdown("SIGTERM"));
process.on("SIGINT", () => void shutdown("SIGINT"));

process.on("unhandledRejection", (reason) => {
  logger.error({ err: reason }, "Unhandled promise rejection");
});

process.on("uncaughtException", (error) => {
  logger.fatal({ err: error }, "Uncaught exception — exiting");
  process.exit(1);
});
