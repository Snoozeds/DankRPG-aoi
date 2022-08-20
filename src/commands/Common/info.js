module.exports = {
name: "info",
aliases: ["inf"],
code: `
$description[1;
**__Bot Info__**
Bot Ping: $round[$ping]ms
Uptime: $uptime
Server Count: $serverCount
Member Count: $allMembersCount

**__Package Info__**
Node: $nodeVersion
Aoi.JS: v$packageVersion]
$color[1;$getGlobalUserVar[EmbedColor]]
$footer[1;Bot by Snoozeds#0802 <3 | Build: v24]
$globalCooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]`
} // Remove that footer if you'd like. Just credit me somewhere.