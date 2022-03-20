module.exports = {
name: "info",
code: `
$description[1;
**__Bot Info__**
Bot Ping: $round[$ping]ms
Database Ping: $round[$dbPing]ms
Uptime: $uptime
Server Count: $serverCount
$username[$clientID] Invite: [link](https://discord.com/oauth2/authorize?client_id=$clientID&scope=bot%20applications.commands&permissions=2147863552) \n
**__Server Info__**
OS: Linux, Ubuntu (20.04.3)
RAM Usage: $round[$ram]MBs
CPU Usage: $round[$cpu]% \n 
**__Package Info__**
Node: $nodeVersion
Aoi.JS: v$packageVersion]
$color[1;$getGlobalUserVar[EmbedColor]]
$footer[1;Bot by Snoozeds#0802 <3]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]`
} // Remove that footer if you'd like. Just credit me somewhere.