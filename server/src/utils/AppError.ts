export class AppError extends Error {
  readonly statusCode: number;
  readonly isOperational: boolean;
  readonly code?: string;

  constructor(message: string, statusCode = 500, code?: string) {
    super(message);
    this.name = "AppError";
    this.statusCode = statusCode;
    this.isOperational = true;
    this.code = code;
    Error.captureStackTrace(this, this.constructor);
  }
}
