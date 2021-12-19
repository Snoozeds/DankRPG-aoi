module.exports = {
    name: "daily",
    code: `
		$if[$getGlobalUserVar[FirstDaily;$authorID]==False]
		<:Unlocked:899050875719393281> You collected your daily reward of <:RPGCoin:855767372534906920>100.
    $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];250]]
		$setGlobalUserVar[FirstDaily;False]
		$else
			<:Unlocked:899050875719393281> You collected your daily reward of <:RPGCoin:855767372534906920>100.
**Congratulations!** You unlocked an achievement: "Your first time"\n+<:RPGCoin:855767372534906920>**100**.
		$setGlobalUserVar[DailyAchievement;<:Unlocked:899050875719393281>]
    $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];350]]
		$setGlobalUserVar[FirstDaily;False]
		$endif
		$globalCooldown[24h;You have already collected your daily reward today. Please come back in **%time%**.]
		$suppressErrors
    `
}
