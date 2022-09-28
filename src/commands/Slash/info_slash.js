module.exports = {
name: "info",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[
;    
{newEmbed:
{description:
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

Links: [Docs](https://dankrpg.xyz/docs)}

{color:$getGlobalUserVar[EmbedColor]}
{footer:Bot by Snoozeds#0802 <3 | Build v25}
}
]

$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]`
}

