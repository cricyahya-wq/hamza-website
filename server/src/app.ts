import express, { type Express } from "express";
import helmet from "helmet";
import cors from "cors";
import compression from "compression";
import pinoHttp from "pino-http";
import { randomUUID } from "node:crypto";
import { env } from "./config/env";
import { logger } from "./utils/logger";
import { AppError } from "./utils/AppError";
import { notFoundHandler, errorHandler } from "./middleware/errorHandler";
import { healthRouter } from "./routes/health.route";
import { contactRouter } from "./routes/contact.route";
import { newsletterRouter } from "./routes/newsletter.route";

export function createApp(): Express {
  const app = express();

  if (env.TRUST_PROXY) {
    app.set("trust proxy", true);
  }

  app.use(helmet());
  app.use(
    cors({
      origin(origin, callback) {
        if (!origin || env.CORS_ORIGIN.includes(origin)) {
          callback(null, true);
          return;
        }
        callback(new AppError(`Origin ${origin} is not allowed by CORS`, 403));
      },
    }),
  );
  app.use(compression());
  app.use(express.json({ limit: "32kb" }));
  app.use(
    pinoHttp({
      logger,
      genReqId: (req, res) => {
        const existing = req.headers["x-request-id"];
        const id = (Array.isArray(existing) ? existing[0] : existing) ?? randomUUID();
        res.setHeader("x-request-id", id);
        return id;
      },
    }),
  );

  app.use("/api/health", healthRouter);
  app.use("/api/contact", contactRouter);
  app.use("/api/newsletter", newsletterRouter);

  app.use(notFoundHandler);
  app.use(errorHandler);

  return app;
}
