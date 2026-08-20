---
title: "Chiic House"
client: "Vietnam"
role: "Front-end Developer"
period: "Apr 2024 - Jul 2024"
order: 6
summary: "Booking platform for a hotel chain with branches across the country, where rates are published openly and availability moves while you are looking at it."
stack: ["Next.js", "SSR", "SEO"]
teamSize: 4
href: "https://chiichouse.com/"
---

## The problem

A chain with branches in cities up and down the country, rates published openly rather
than quoted on request, and availability that changes while a guest is still deciding.
The site also has to be findable on a search engine, because that is where the visit
starts rather than on the brand's own homepage.

## What I did

I built the booking path: browsing every branch in the country, checking what is actually
free at the listed price, and completing the reservation. I also wired up the live chat,
so a guest with a question reaches customer support without leaving the page and losing
what they had selected.

Rendering runs on the server through Next.js, which matters here for a specific reason: a
crawler receives the room listings already in the HTML instead of having to execute
JavaScript to find them. The REST layer goes through Axios with error handling and
retries in one place rather than repeated across components.

## Result

A booking flow four people could work on at once, still live and still taking bookings.
