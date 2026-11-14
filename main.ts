// ai-joke-03 entry (Node 22, standard library only): writes one fixed joke, a one-liner about AI
// coding agents, to /output/entry.txt. A joke about working beside an AI that writes code.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), "My AI coding agent's idea of debugging is insisting the bug is a feature, then offering to document it.");
