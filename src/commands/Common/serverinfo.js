module.exports = {
name: "serverinfo",
aliases: "si",
$if: "v4",
code: `
$if[$serverBanner==]
$description[1;
\`$serverName ($guildID)\`
**Server Owner:** <@$ownerID>
**Server Created:** <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R>
**Emote Count:** $emojiCount[$guildID] emotes
**Boost Level:** $replaceText[$serverBoostLevel[$guildID];NONE;0;1]

Links: [Icon]($serverIcon[$guildID])
]
$thumbnail[1;$serverIcon[$guildID]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$else
$description[1;
\`$serverName ($guildID)\`
**Server Owner:** <@$ownerID>
**Server Created:** <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R>
**Emote Count:** $emojiCount[$guildID] emotes
**Boost Level:** $replaceText[$serverBoostLevel[$guildID];NONE;0;1]

Links: [Icon]($serverIcon[$guildID]) | [Banner]($serverBanner[$guildID]) 
]
$thumbnail[1;$serverIcon[$guildID]]
$image[$serverBanner[$guildID;2048]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$endif

$globalCooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]`
}
