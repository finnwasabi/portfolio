---
title: "RediMed WPI Calculator"
client: "Australia"
role: "Front-end Developer"
period: "May 2024 — Mar 2025"
order: 7
summary: "A Microsoft Word add-in that calculates impairment ratings inside the medical report being written, instead of beside it."
stack: ["React", "Office Add-in", "TypeScript"]
teamSize: 2
---

## The problem

A clinician writing an impairment report works through the arithmetic by hand: range of
motion, whole person impairment, upper extremity impairment, each read off published
tables with their own rules about combining and rounding. It is slow, and it is exactly
the kind of arithmetic that goes wrong quietly, because a plausible wrong number looks
the same as a right one.

## What I did

Built the interface for an add-in that does the calculation where the report is being
written. React running inside the Office runtime, so the numbers land in the document
without anyone copying them across from a calculator in another window.

I also ran the demos in client meetings. That changed how I build more than the technical
side did. Watching a clinician use the thing while you sit there finds problems faster
than any amount of re-reading the specification, and it is uncomfortable in a way that is
good for the work.

## Result

The calculation happens in the document, which is where the mistake used to happen.
