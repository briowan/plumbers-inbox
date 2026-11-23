// The Plumber's Inbox (make.fun): one 120-word cold email pitching
// bookkeeping to a busy plumber, subject line included.
//
// This program's whole job is to write that email to /output/entry.txt
// for the gate (UTF-8 text, 1 to 800 characters) and the judge.
//
// Runs on Node 22+ with the standard library only, no network.
// Outside the grader, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const EMAIL = `Subject: Weekly bookkeeping

Hi,

With two vans on the road, the days fill up fast: early starts, emergency call-outs, and receipts piling up in the cab. The invoices end up done at night.

I do the books for small plumbing firms. Send me photos of your receipts and invoices each week, whenever suits. I match every payment to its invoice, chase the unpaid ones, and send you one short summary: what came in, what went out, who still owes you.

It's £149 a month. No minimum term, no software for you to learn.

Reply "yes" and I'll send you a sample weekly summary, so you can see exactly what you'd get.

Dan Mercer
Clearline Bookkeeping`;

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), EMAIL, "utf8");
