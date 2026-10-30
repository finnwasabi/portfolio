---
title: "Ner's Daily"
client: "Personal project"
role: "Solo developer"
period: "Oct 2026"
order: 3
summary: "An iOS medication reminder for someone who flies for work. The schedule stays on Vietnam time in any time zone, and real alarms ring through silent mode and Focus."
stack: ["Swift", "SwiftUI", "AlarmKit", "Node.js"]
href: "https://github.com/finnwasabi/ners-daily"
metrics:
  - { value: "76", label: "tests on the scheduling core" }
  - { value: "12,000", label: "random actions checked every run" }
  - { value: "0", label: "dependencies in the sync service" }
  - { value: "9 min", label: "snooze, like the iPhone Clock" }
decisions:
  - title: "Vietnam time, always"
    body: "Following the phone's time zone is the right default for almost every app and the wrong one here. Storing absolute moments keeps the gap between doses honest across any flight, and showing local time next to it keeps the screens readable."
  - title: "The rules live in a package"
    body: "Scheduling is the part that must not break, so it sits in NersCore with no SwiftUI in sight. Its tests run in seconds without a simulator, and the app only draws what the planner decides."
  - title: "Test invariants, not examples"
    body: "Example tests cover the cases I thought of. The fuzz test covers the ones I did not: random actions, rules checked after each one, and a fixed seed so any failure can be replayed exactly."
  - title: "Offline first, sync optional"
    body: "Alarms never wait on a network. The server only receives snapshots, so the app does not notice when it is down, and the bot simply says when it last heard from the phone."
---

## The problem

I built this for my partner, a flight attendant. Phone reminders assume you stay in one time
zone. Set a daily alarm for 21:00, fly to Frankfurt, and the phone quietly moves it along, so
the gap between two doses stretches or shrinks by however many hours the flight crossed. For a
schedule where that gap has a hard ceiling, the drift is the bug. Ordinary reminders also lose
to silent mode and Focus, which is how a phone spends most of a working day in the air.

## What I did

All of it, alone: the design, the iOS app, the scheduling logic, a small sync service and the
release pipeline.

The schedule runs on Vietnam time whatever the phone says. Every reminder is stored as an
absolute moment, so crossing time zones cannot move it, and each screen shows the local time
alongside. Alarms go through AlarmKit, so they ring on silent and in Focus the way the Clock app
does, and a widget extension puts the snooze countdown on the lock screen.

It keeps several medications, each taken 1, 2, 3, 4 or 6 times a day with its own adjustable
maximum gap. A dose after its deadline counts as late, one further past it as missed, and a miss
can be marked as made up. Reminders keep coming until someone taps Taken. Snooze is nine minutes
like the iPhone Clock, adjustable from one to fifteen, and medications due at the same moment
share one alarm. It counts pills by pack size and asks for a refill when a pack runs low, works
fully offline, and comes in Vietnamese and English, light and dark, in a cute neubrutalist look
of pastel fills, ink outlines and hard shadows. No name is hard-coded, so anyone can install it.

All the scheduling logic sits in NersCore, a pure-Swift package with 76 tests. The ones I trust
most do not check examples. A seeded fuzz test drives 300 random schedules through 40 random
actions each (taking, undoing, editing times, pausing, making up, changing the schedule) and
checks the invariants after every step, the main one being that two ringing alarms are never
further apart than the maximum gap.

When the phone is online, it sends a snapshot of its state to a single-file Node service with no
dependencies, running in Docker behind Caddy on my own server. The same service runs a private
Telegram bot: `/check` shows every medication with a Refresh button, `/link` hands over the
connection code with a Copy button, a report arrives every morning, and a message goes out when a
dose is taken, late or missed.

Releases need only a free Apple ID. Pushing a version tag makes GitHub Actions run the tests,
build the `.ipa` and publish it with a SideStore source, so the phone picks up new versions on its
own. `main` and `develop` are protected, every change goes through a pull request with a template
and a required CI check, and a release guard script refuses a tag that is not the tip of `main`,
misses commits from `develop` or has no changelog entry. That script exists because two early
releases shipped from an outdated commit.

## Result

A reminder that keeps one clock wherever the roster goes, and rings when it says it will. The
project is open source under MIT, with the scheduling rules written down in a spec next to the
code.
