---
title: "Blue Chip"
client: "Securities, Vietnam"
role: "Front-end Developer"
period: "Sep 2025 — Nov 2025"
order: 2
summary: "Public-facing site for a listed brokerage, bilingual, where every page is assembled from CMS sections instead of being built by a developer."
stack: ["Next.js", "TypeScript", "Strapi", "i18n"]
teamSize: 5
href: "https://www.hsc.com.vn"
---

## The problem

This is the site a brokerage sends people to, not the platform they trade on. Which means
it changes constantly: campaigns, product pages, notices, dividend records, board
changes, research notes. On the old site each of those went through a developer, so
publishing anything took a release.

It also has to work in two languages, and be legible to someone reading it on a phone
between meetings.

## What I did

I built the front end on Next.js and React, with Strapi behind it. There is one route,
a catch-all, and every page underneath it is composed by an editor from a fixed library
of sections. Adding a page is now content work, not a deployment.

That library is where the time went. Each section has to survive whatever an editor puts
in it: a heading of three words or thirty, a carousel of two items or twenty, a table of
dividend history, a filterable document archive, a research list that stays quick as it
fills up. Locale lives in the URL, so the Vietnamese page and its English counterpart are
separate addresses a search engine can index properly. Editors also get a preview mode
that renders unpublished content through the live templates, so nothing goes out on a
guess.

## Result

Three months from empty repository to launch with a team of five, and I wrote the largest
share of the front end. The site now publishes without a developer in the loop.
