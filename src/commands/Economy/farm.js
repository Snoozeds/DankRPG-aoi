module.exports = {
name: "farm",
$if: "v4",
code: `
$if[$getGlobalUserVar[HP;$authorID]<=35]
You die because you have run out of HP.
$setGlobalUserVar[HP;100;$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else

$if[$getGlobalUserVar[FirstFarm;$authorID]==False]
$if[$getGlobalUserVar[HP;$authorID]<$sub[$getGlobalUserVar[MaxHP;$authorID];50]]
$title[1;$username's farm]
$description[1;You farmed $getVar[FarmK]$getVar[FarmO]$getVar[FarmS] and earned <:RPGCoin:855767372534906920>**$random[25;50]**.\nYou fruit healed you for **$getVar[Heart]$random[25;35]**. You now have $getVar[Heart]**$getGlobalUserVar[HP;$authorID]/$getGlobalUserVar[MaxHP;$authorID]**.]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[25;50]]]
$setGlobalUserVar[HP;$sum[$getGlobalUserVar[HP;$authorID];$random[25;35]];$authorID]
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
$endif
$endif
$globalCooldown[30s;Please wait **%time%** before farming again.]
$onlyIf[$isBot[$authorID]!=true;]
`
}
