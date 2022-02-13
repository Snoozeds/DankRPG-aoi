module.exports = ({
name: "info",
code: `
$description[
**__Bot Info__**
Bot Ping: $round[$ping]ms
Database Ping: $round[$dbPing]ms
Uptime: $uptime
Server Count: $serverCount\n
**__Server Info__**
OS: Linux, Ubuntu (20.04.3)
RAM Usage: $round[$ram]MBs
CPU Usage: $round[$cpu]% \n
**__Package Info__**
Node: $nodeVersion
Aoi.JS: v$packageVersion
]
$color[$getGlobalUserVar[EmbedColor]]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$suppressErrors`
})
