module.exports = {
name: "serverinfo",
code: `$description[1;
\`$serverName ($guildID)\`
:bust_in_silhouette: **Server Owner:** <@$ownerID>
<:Boosted:917749329295454238> **Boost Count:** $serverBoostCount[$guildID] boosts
:slight_smile: **Emoji Count:** $emojiCount[$guildID] emojis
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$onlyIf[$isBot[$authorID]!=true;]`
}
