module.exports = {
name: "daily",
aliases: ["d"],
$if: "v4",
category: "Economy",
description: "Get your daily coins.",
usage: "N/A",
code: `
$if[$getGlobalUserVar[FirstDaily;$authorID]==False]
<:Unlocked:899050875719393281> You collected your daily reward of **$getVar[Coi]100**$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[DailyMCGain;$authorID]>0];true; and **$getVar[MegaCoi]$getGlobalUserVar[DailyMCGain;$authorID]**;1];false;;1].
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];100]]
$setGlobalUserVar[MegaCoins;$sum[$getGlobalUserVar[MegaCoins;$authorID];$getGlobalUserVar[DailyMCGain;$authorID]]]
$setGlobalUserVar[FirstDaily;False]

$else
<:Unlocked:899050875719393281> You collected your daily reward of **$getVar[Coi]100**$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[DailyMCGain;$authorID]>0];true; and **$getVar[MegaCoi]$getGlobalUserVar[DailyMCGain;$authorID]**;1];false;;1].
**Congratulations!** You unlocked an achievement: "Your first time"\n+$getVar[Coi]**100**.
$setGlobalUserVar[MegaCoins;$sum[$getGlobalUserVar[MegaCoins;$authorID];$getGlobalUserVar[DailyMCGain;$authorID]]]
$setGlobalUserVar[DailyAchievement;<:Unlocked:899050875719393281>]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];200]]
$setGlobalUserVar[FirstDaily;False]
$endif

$globalCooldown[1d;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`daily\` again in **%hour%h %min%m %sec%s**.}
{color:#ff2050}}]`
}

// Unfortunately, I still have to substitute for the fact that somebody may never use the daily command until they buy the Daily MC upgrade.
// Which would make the achievement unobtainable, if I didn't. Fun! :)