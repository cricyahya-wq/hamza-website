import { Router } from "express";
import { contactRateLimiter } from "../middleware/rateLimiter";
import { validateBody } from "../middleware/validate";
import { spamGuard } from "../middleware/spamGuard";
import { contactSchema } from "../validators/contact.schema";
import { submitContact } from "../controllers/contact.controller";

export const contactRouter = Router();

contactRouter.use("/", (req, res, next) => {
  console.log("--- CONTACT ROUTE HIT ---");
  console.log("req.ip:", req.ip);
  console.log("req.ips:", req.ips);
  console.log("x-forwarded-for:", req.headers["x-forwarded-for"]);
  console.log("req.socket.remoteAddress:", req.socket.remoteAddress);
  console.log("req.method:", req.method);
  console.log("req.originalUrl:", req.originalUrl);
  next();
});

contactRouter.post(
  "/",
  contactRateLimiter,
  validateBody(contactSchema),
  spamGuard({ message: "Thanks for reaching out — we'll be in touch shortly." }),
  submitContact,
);
