module.exports = {
name: "daily",
$if: "v4",
code: `
$if[$getGlobalUserVar[FirstDaily;$authorID]==False]
<:Unlocked:899050875719393281> You collected your daily reward of <:RPGCoin:855767372534906920>100.
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];100]]
$setGlobalUserVar[FirstDaily;False]
$else
<:Unlocked:899050875719393281> You collected your daily reward of <:RPGCoin:855767372534906920>100.
**Congratulations!** You unlocked an achievement: "Your first time"\n+<:RPGCoin:855767372534906920>**100**.
$setGlobalUserVar[DailyAchievement;<:Unlocked:899050875719393281>]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];200]]
$setGlobalUserVar[FirstDaily;False]
$endif
$globalCooldown[24h;You have already collected your daily reward today. Please come back in **%time%**.]
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]`
}
