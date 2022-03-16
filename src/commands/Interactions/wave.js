module.exports = {
name: "wave",
code: `
$description[<@$authorID> waves.]
$image[$httpRequest[https://api.dankrpg.xyz/anime/wave;GET;;url]]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[15s;Please don't spam commands. :)\n(**%time%**)]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]`
}