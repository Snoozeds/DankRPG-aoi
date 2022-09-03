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
Uptime: $uptime
Server Count: $serverCount
Member Count: $allMembersCount
        
**__Package Info__**
Node: $nodeVersion
Aoi.JS: v$packageVersion

Links: [Docs](https://dankrpg.xyz/docs)}

{color:$getGlobalUserVar[EmbedColor]}
{footer:Bot by Snoozeds#0802 <3 | Build v25}
}

]
$globalCooldown[5s;$interactionReply[Please wait before running this command again. This helps us enforce ratelimits.]]
`
}

