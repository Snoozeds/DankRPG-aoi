module.exports = {
name: "userinfo",
prototype: "slash",
type: "interaction",
code: `
$interactionReply[
;    
{newEmbed:
{description:
\`$userTag[$interactionData[options.data[0].value]] ($findUser[$interactionData[options.data[0].value]])\`
**Highest Role:** <@&$highestRole[$interactionData[options.data[0].value]]>
**Joined Discord:** <t:$truncate[$divide[$creationDate[$interactionData[options.data[0].value];$guildID;ms];1000]]:R>
**Joined Server:** <t:$truncate[$divide[$memberJoinedDate[$interactionData[options.data[0].value];$guildID;ms];1000]]:R>

Links: [Avatar]($userAvatar[$interactionData[options.data[0].value]])$replaceText[$replaceText[$checkCondition[$getUserBanner[$interactionData[options.data[0].value]]!=null];true; | [Banner]($getUserBanner[$interactionData[options.data[0].value]]);1];false;;1]
}
{image:$replaceText[$getUserBanner[$interactionData[options.data[0].value]];null;;1]}
{thumbnail:$userAvatar[$interactionData[options.data[0].value]]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
}
]

$globalCooldown[15s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
}