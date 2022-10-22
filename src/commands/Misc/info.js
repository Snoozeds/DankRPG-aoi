module.exports = {
name: "info",
aliases: ["inf"],
category: "Misc",
description: "Shows information about the bot.",
usage: "N/A",
code: `
$description[1;
**__Bot Info__**
Bot Ping: $round[$ping]ms
Uptime: $uptime[humanize]

**__Stats__**
Server Count: $serverCount
Member Count: $allMembersCount
Command Count: $commandsCount
Variables Count: $variablesCount

**__Package Info__**
Node: $nodeVersion
Aoi.JS: v$packageVersion

Links: [Docs](https://dankrpg.xyz/docs)
]
$color[1;$getGlobalUserVar[EmbedColor]]
$footer[1;Bot by Snoozeds#0802 <3 | Build: v27]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`info\` again in **%sec%s**.}
{color:#ff2050}}]`
} // Remove that footer if you'd like. Just credit me somewhere.