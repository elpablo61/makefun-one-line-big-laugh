import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Winning line (120 characters): a smart speaker, asked for something
// relaxing, answers with the owner's own 3 a.m. voice notes.
const LINE =
  "I asked my smart speaker for something relaxing. It played my 3 a.m. voice notes, in which I am arguing with a mosquito.";

// The gate accepts 1-200 characters of non-whitespace text; fail loudly
// instead of writing an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
