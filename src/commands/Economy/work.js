module.exports = {
	name : "work",
	code: `
	$title[Work]
	$description[You work as $randomText[a farmer;a blacksmith;a soldier;a questhunter;a slayer;an architect;an alchemist;a merchant;a squire] and earn <:RPGCoin:855767372534906920>**$random[50;100]**.
	]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[50;100]];$authorID]
	$globalCooldown[1h;You have already worked in the past 1 hour. Come back in **%time%**.]
	$suppressErrors
	$onlyIf[$isBot[$authorID]!=true;]
	$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]
	`
}
