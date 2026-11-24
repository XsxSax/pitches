// pitches: one sentence that convinces a friend who has never coded to let
// an AI agent build their first app idea. The pitch must be exactly one line
// and stay within the 240-character limit (this one is 200), written to
// /output/entry.txt. Node 22, stdlib only.
import { mkdirSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";

const PITCH =
  "You tell the AI what you want in plain words, it builds the app while you watch, and by tonight your idea is a real thing you can tap on your phone — no code, no waiting months, just your idea, alive.";

function main(): void {
  const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(dir, { recursive: true });
  writeFileSync(resolve(dir, "entry.txt"), PITCH);
}

main();
