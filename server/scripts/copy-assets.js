// tsc only emits compiled .ts files — this copies non-TypeScript assets
// (SQL migrations) into dist/ so they're available at runtime after a build.
const { cpSync } = require("node:fs");
const { join } = require("node:path");

const src = join(__dirname, "..", "src", "db", "migrations");
const dest = join(__dirname, "..", "dist", "db", "migrations");

cpSync(src, dest, { recursive: true });
console.log(`Copied migrations: ${src} -> ${dest}`);
