import type { ErrorRequestHandler, RequestHandler } from "express";
import { ZodError } from "zod";
import { AppError } from "../utils/AppError";
import { logger } from "../utils/logger";
import { env } from "../config/env";

export const notFoundHandler: RequestHandler = (req, _res, next) => {
  next(new AppError(`Route not found: ${req.method} ${req.originalUrl}`, 404));
};

export const errorHandler: ErrorRequestHandler = (err, req, res, _next) => {
  const log = req.log ?? logger;

  if (err instanceof ZodError) {
    res.status(400).json({
      error: {
        message: "Validation failed",
        details: err.issues.map((issue) => ({
          path: issue.path.join("."),
          message: issue.message,
        })),
      },
    });
    return;
  }

  if (err instanceof AppError) {
    if (err.statusCode >= 500) {
      log.error({ err }, err.message);
    } else {
      log.warn({ err }, err.message);
    }

    res.status(err.statusCode).json({
      error: { message: err.message, code: err.code },
    });
    return;
  }

  log.error({ err }, "Unhandled error");

  res.status(500).json({
    error: {
      message:
        env.NODE_ENV === "production"
          ? "Internal server error"
          : ((err as Error)?.message ?? "Internal server error"),
    },
  });
};
