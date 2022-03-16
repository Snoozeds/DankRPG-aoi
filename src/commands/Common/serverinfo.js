module.exports = {
	name: "serverinfo",
	code: `$description[
\`$serverName ($guildID)\`
:bust_in_silhouette: **Server Owner:** <@$ownerID>
<:Boosted:917749329295454238> **Boost Count:** $serverBoostCount boosts
:slight_smile: **Emoji Count:** $emojiCount emojis
	]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]`
}
