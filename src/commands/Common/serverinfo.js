module.exports = {
name: "serverinfo",
aliases: "si",
code: `$description[1;
\`$serverName ($guildID)\`
:bust_in_silhouette: **Server Owner:** <@$ownerID>
<:Boosted:917749329295454238> **Boost Count:** $serverBoostCount[$guildID] boosts 
<:boost_level:996067829335998534> **Boost Level:** $replaceText[$serverBoostLevel[$guildID];TIER_;;1]
:slight_smile: **Emote Count:** $emojiCount[$guildID] emotes
]
$thumbnail[1;$serverIcon[$guildID]]
$image[$serverBanner[$guildID;2048]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
$onlyIf[$isBot[$authorID]!=true;]`
}
