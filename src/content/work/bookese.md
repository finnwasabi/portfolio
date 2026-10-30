---
title: "Bookese"
client: "Vietnam"
role: "Front-end Developer"
period: "Jul 2022 - Mar 2025"
order: 3
summary: "An accommodation booking platform in the mould of Agoda and Booking.com, where guests search, compare and book stays."
stack: ["React", "REST APIs", "Sass"]
teamSize: 8
href: "https://bookese.com/"
---

## The problem

Booking a room is a deceptively hard interface. A guest arrives with a date range and a
budget, and every screen after that has to keep those two facts intact while the
availability underneath them changes. Get it wrong and people lose their search halfway
through checkout.

## What I did

I built the interface from the Figma designs and wired it to the back end: account
creation and login, accommodation and room availability, the third-party payment step for
confirming a booking, and the review system guests use afterwards.

The payment integration needed the most care. It hands control to an external provider
and takes it back, so the UI has to survive a user closing the tab, paying twice, or
returning an hour later with a stale price.

## Result

A booking flow that eight people could keep working on at once. I was on it for the
whole of my time at the company, and it is still in production and still growing.
