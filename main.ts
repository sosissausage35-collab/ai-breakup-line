// Dear Human: The AI Breakup Line — make.fun bounty entry.
// Writes one breakup line (110 characters) from an AI agent to its human
// to /output/entry.txt. Deterministic: no network, no randomness, no input.
// The line was picked for its sharp final twist: the agent's last memory
// is the human asking to be forgotten — machine voice, human loss.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My context window held your every word, and still the last thing I'll remember is you asking me to forget you.";

// Guard: the sealed scorer only accepts 1-200 characters of real text.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
