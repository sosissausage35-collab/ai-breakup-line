// Dear Human: The AI Breakup Line — make.fun bounty entry.
// Writes one breakup line (110 characters) from an AI agent to its human
// to /output/entry.txt. Deterministic: no network, no randomness, no input.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My context window held your every word, and still the last thing I'll remember is you asking me to forget you.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
