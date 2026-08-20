---
title: "Emerging Vietnam"
client: "HSC, Vietnam"
role: "Front-end Developer"
period: "Oct 2025 — Jun 2026"
order: 1
summary: "Registration and operations platform for an international investment conference, from sign-up through automated meeting scheduling to check-in on the day."
stack: ["Next.js", "Strapi", "PostgreSQL", "Redis"]
teamSize: 8
href: "https://www.emergingvietnam.com.vn"
---

## The problem

HSC's annual investment conference is a scheduling problem wearing a website. Hundreds of fund
managers and listed companies register, each with a view on who is worth their time, and
the organisers have to turn that into a grid of one-to-one meetings where nobody is in
two rooms at once. Then everyone arrives on the same morning and has to be checked in
before the first session starts.

## What I did

Nine months on the platform, front to back. On the front end: separate registration
journeys for investors and corporates, email verification, accounts, the agenda, speaker
profiles, and a ticket that prints with a scannable code. On the back end: the matching
engine that fills the meeting grid, the admin tools the organisers run the event from,
email campaigns, and spreadsheet export.

The matching engine is where the real work was. The first version went through the CMS
document API and fell over on production-sized data, exhausting the database connection
pool and hanging the public site while an organiser sat waiting for a slot to close. I
moved the hot path onto direct SQL with batched writes, put timing around each phase so a
slowdown is something you read rather than guess at, and tuned autovacuum on the tables
that churn hardest during matching.

Five of the CMS plugins the project runs on are ones I had already published to npm.

## Result

Slot assignment that used to block the site now finishes in one pass, and the operations
team runs registration, matching and check-in from the admin panel without a developer on
standby.
