module.exports = {
name: "info",
code: `
$description[1;
**__Bot Info__**
Bot Ping: $round[$ping]ms
Database Ping: $round[$dbPing]ms
Uptime: $uptime
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