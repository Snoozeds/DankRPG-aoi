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
Aoi.JS: v$packageVersion}

    {color:$getGlobalUserVar[EmbedColor]}
    {footer:Bot by Snoozeds#0802 <3}
}

]
$cooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
`
}

