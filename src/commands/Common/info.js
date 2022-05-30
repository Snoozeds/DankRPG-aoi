module.exports = {
name: "info",
code: `
$description[1;
**__Bot Info__**
Bot Ping: $round[$ping]ms
Database Ping: $round[$dbPing]ms
Uptime: $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$uptime; week,;w;1];days,;d;1]; hours,;h;1]; minutes,;m;1]; seconds;s;1]; day,;d;1]; hour,;h;1]; minute,;m;1]; second;s;1]
Server Count: $serverCount
Member Count: $allMembersCount

**__Server Info__**
OS: Linux, Ubuntu (20.04.3)
RAM Usage: $round[$ram]MBs
CPU Usage: $cpu[os]% \n 
**__Package Info__**
Node: $nodeVersion
Aoi.JS: v$packageVersion]
$color[1;$getGlobalUserVar[EmbedColor]]
$footer[1;Bot by Snoozeds#0802 <3]
$globalCooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]`
} // Remove that footer if you'd like. Just credit me somewhere.