---
title: "Multibank Info"
client: "Netherlands"
role: "Front-end Developer"
period: "Mar 2024 - Mar 2025"
order: 5
summary: "One dashboard for money spread across several banks: balances, transactions and investment plans, updating live."
stack: ["React", "TypeScript", "Charts"]
teamSize: 6
---

## The problem

Somebody with accounts at five banks has five logins, five dashboards and no single view
of what they own. This application is that view: every balance, every transaction and
every investment plan in one place, moving as the underlying accounts move.

## What I did

I built the dashboard in React and TypeScript, starting with the live charts that are the
first thing anyone looks at. Around them: linking and managing multiple accounts, reading
balances, joining the investment plans each bank offers, and reading transaction history
either consolidated across every account or one account at a time.

The typing mattered more here than on a typical project. A number on this screen is
someone's money, and a field that arrives as a string when a chart expects a number is
not the kind of bug you want to discover in production.

## Result

Six people building against one shared set of types, with the dashboard as the piece
everyone touched.
