---
title: "Solving Sadservers"
description: "SRE/DevOps challenges"
pubDate: "Jan 29 2024"
heroImage: "/images/blog-placeholder-4.jpg"
---

Saint John
Santiago
Saskatoon
Tokyo
Manhattan
Capetown
Salta
Jakarta
Bern
Singara
Karakorum
Oaxaca
Venice
Melbourne
Hong-Kong
Lisbon

# Intro

SadServers is a LeetCode style puzzle for Sysadmins/Site Reliability Engineers/DevOps Engineers or whatever Ops people in IT are called nowadays. The following is a writeup of walking through the challenges given.

# Saint John

A developer created a testing program that is continuously writing to a log file /var/log/bad.log and filling up disk. You can check for example with tail -f /var/log/bad.log. This program is no longer needed. Find it and terminate it.

So let’s see what is accessing this file with lsof:

$ lsof /var/log/bad.log
COMMAND PID USER FD TYPE DEVICE SIZE/OFF NODE NAME
badlog.py 621 ubuntu 3w REG 259,1 10629 67701 /var/log/bad.log
Second column lists the ID of the process what writes to the log.

We’ll kill ist with kill:

kill 621
