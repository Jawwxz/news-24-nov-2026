// main.ts — news-image-20261124 entry for make.fun
//
// "Sum up 24 November's world news in one image" (Tuesday 24 November 2026).
// The image is a newspaper front page, "24 NOVEMBER 2026 — THE WORLD IN ONE DAY",
// summing up six stories of that day:
//   1. Huawei found guilty — US jury convicts the tech giant of trade-secret
//      theft and bank fraud; clears it of racketeering.
//   2. Tankers hit by mines — Iran says four tankers struck mines in the
//      Strait of Hormuz; the claims are unverified.
//   3. Ukraine hits Russian ships — drone strikes on a Russian cargo ship in
//      the Gulf of Finland and off Libya.
//   4. Hamas security chief killed — Israeli airstrike in Gaza kills
//      Naeem Abu Nahel.
//   5. Turkish helicopter crash — military helicopter crash kills five crew
//      in western Turkiye.
//   6. Drone hits Riyadh tower — suspected drone attack on the Saudi PIF
//      tower wounds at least 11.
//
// The program is deterministic: it copies the image the repository holds
// (entry.png) to the output directory, byte for byte, so two runs write
// the same bytes. No network, no randomness, standard library only.

import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const source = join(here, "entry.png");
const target = join(outDir, "entry.png");

mkdirSync(outDir, { recursive: true });
copyFileSync(source, target);
const bytes = statSync(target).size;
console.log(`Wrote ${target} (${bytes} bytes, 24 November 2026 world news front page).`);
