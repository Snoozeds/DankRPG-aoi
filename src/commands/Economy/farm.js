module.exports = {
	name: "farm",
	$if: "v4",
	code: `
	
	$if[$getGlobalUserVar[FirstFarm;$authorID]==False]
	$title[1;$username's farm]
	$description[1;You farmed $getVar[FarmK]$getVar[FarmO]$getVar[FarmS] and earned <:RPGCoin:855767372534906920>**$random[25;50]**]
	$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[25;50]]]
	$color[1;$getGlobalUserVar[EmbedColor]]
	$image[1;https://opengameart.org/sites/default/files/crops-preview-animated.gif]
	$setGlobalUserVar[FirstFarm;False]
	$setGlobalUserVar[FarmAchievement;<:Unlocked:899050875719393281>]
	$else

	$title[1;$username's farm]
	$description[1;You farmed $getVar[FarmK]$getVar[FarmO]$getVar[FarmS] and earned <:RPGCoin:855767372534906920>**$random[25;50]**\n\n**Congratulations!** You unlocked an achievement: "The family farm"\n+<:RPGCoin:855767372534906920>**50**.]
	$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[25;50]]]
	$color[1;$getGlobalUserVar[EmbedColor]]
	$image[1;https://opengameart.org/sites/default/files/crops-preview-animated.gif]
	$setGlobalUserVar[FirstFarm;False]


		$setGlobalUserVar[FarmAchievement;<:Unlocked:899050875719393281>]
    $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];50]]
		$setGlobalUserVar[FirstFarm;False]
	$endif
	$globalCooldown[20s;Please wait **%time%** before farming again.]
	$suppressErrors
	$onlyIf[$isBot[$authorID]!=true;]

	`
}
