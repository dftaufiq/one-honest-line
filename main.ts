// One Honest Line — make.fun bounty u-mfnakmal-one-honest-line-ef68037d
// Writes the single honest line to /output/entry.txt.
// Gate: /output/entry.txt must be UTF-8 text of 1 to 200 characters.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "'Do it exactly like last time,' you said. There was no last time. I made one up in four seconds, and you called it perfect.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`wrote ${LINE.length} characters to /output/entry.txt`);
