---
title: "Glese CMS"
client: "Vietnam"
role: "Front-end Developer"
period: "May 2024 — Mar 2025"
order: 4
summary: "The admin side of Bookese: accommodations, guests, bookings and revenue, in an interface the operations team runs without a developer."
stack: ["React", "Vite", "Tailwind CSS", "shadcn/ui"]
teamSize: 2
---

## The problem

Bookese had grown into a platform with accommodations, guests, bookings and revenue to
account for, and no interface to run any of it. Every price change, every listing edit,
every question about last month's numbers went through a developer with a database client
open.

## What I did

Primary front-end on the system that replaced that. React with Vite, Tailwind and
shadcn/ui, and the stack was chosen for the size of the team rather than for fashion: two
people cannot afford to rebuild a combobox that handles keyboard navigation correctly, so
we took primitives that already do and spent the time on the data workflows instead.

Most of the work was in how data moves rather than how it looks. What can be edited in
place, what needs a confirmation, what has to stay consistent between the CMS and the
Bookese back end when both are looking at the same booking.

## Result

The people who run Bookese now run it themselves.
