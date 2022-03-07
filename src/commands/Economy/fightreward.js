module.exports = {
	name: "fight",
	code: `
	$if[$randomText[Yes;No]==Yes]
	$onlyIf[$getGlobalUserVar[HP;$authorID]>$random[25;30];]
	$description[The monster dropped an extra <:RPGCoin:855767372534906920>**$random[25;30]**.]
	$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[20;25]]]
	$color[$getGlobalUserVar[EmbedColor]]
	$endif
	$cooldown[20s]
	$suppressErrors
	$onlyIf[$isBot[$authorID]!=true;]
	`
}
