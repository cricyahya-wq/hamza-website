import { Router } from "express";
import { checkDatabaseConnection } from "../db/pool";

export const healthRouter = Router();

healthRouter.get("/", async (_req, res) => {
  const databaseHealthy = await checkDatabaseConnection();

  res.status(databaseHealthy ? 200 : 503).json({
    status: databaseHealthy ? "ok" : "degraded",
    database: databaseHealthy ? "ok" : "unreachable",
    timestamp: new Date().toISOString(),
  });
});
