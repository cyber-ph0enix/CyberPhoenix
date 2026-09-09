---
title: "Linux for Cybersecurity Beginners"
date: "2026-08-20"
author: "Saniya Yadav"
tags: ["Linux", "Beginner", "Tutorial"]
summary: "A beginner-friendly guide to mastering Linux commands essential for cybersecurity."
---

### Linux for Cybersecurity Beginners

Hey everyone! Welcome to this week’s edition of HackLogs, where we explore something new in tech and cybersecurity every week. Today, we’re talking about something super practical — how you can use Linux for basic cybersecurity tasks, even as a beginner. Most real-world servers — from banking systems to web apps — run on Linux. So, if you plan to go into cybersecurity, Linux is the place to start. Let’s look at a few simple commands that can help you detect suspicious activity on your system.

### First, you can check who’s currently logged into your system using the command:

who or w , This shows you all active users. If you ever notice a login you don’t recognize — that’s your first sign that someone might’ve accessed your machine remotely.

### Next, you can see the login history, including failed attempts, using:

last and lastb , If you see multiple failed logins from the same IP address — that could be a brute-force attack.

### Third, check your network connections with:

netstat -tulnp or ss -tulnp , This shows which IPs your system is talking to. If you find unknown addresses or strange open ports, that’s suspicious — attackers often open hidden communication channels.

### Fourth, see all the running processes with:

top or ps aux , Sometimes malware hides as a background process — spotting something you didn’t start yourself is a good habit.

### Finally, check for files recently modified using:

find /etc -type f -mtime -1 , This helps you detect system file changes made within the last day — something that usually happens right after a hack attempt.

### So here’s a small HackLogs Challenge for all of you:

Try these commands on your Linux system or a virtual machine. Find your open ports, check your active users, and see if you can spot any unfamiliar processes. Take a screenshot of your findings and share it with the club — let’s see who becomes this week’s fastest threat hunter!

That’s it for today’s HackLogs.

Next week, we’ll look at how to set up a simple firewall on Linux using something called UFW — Uncomplicated Firewall. It’s quick, it’s easy, and it’ll make your system much more secure. Thanks for listening — and remember, in cybersecurity, curiosity and vigilance are your best tools!

Authors - Rudrakshi and Nitya