module.exports = {
name: "achievements",
$if: "v4",
code: `$onlyIf[$isBot[$findUser[$message;yes]]!=true;you cannot check a bot's achievements.]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]
$title[1;$username[$findUser[$message;yes]]'s achievements]
$description[1;**__On Another Level__**[$getGlobalUserVar[ATKAchievement;$findUser[$message;yes]]]\nUpgrade to 2ATK.\nReward:  +<:RPGCoin:855767372534906920>150\n\n**__Your first time__** [$getGlobalUserVar[DailyAchievement;$findUser[$message;yes]]]\nCollect your daily reward for the first time.\nReward: +<:RPGCoin:855767372534906920>100\n\n**__The family farm__**[$getGlobalUserVar[FarmAchievement;$findUser[$message;yes]]]\nGo farming at least once.\nReward: +<:RPGCoin:855767372534906920>50\n\n**__Slots Addict__**[$getGlobalUserVar[slotAchievement;$findUser[$message;yes]]]\nSpent a total of $getVar[Coi]1000 on \`$getServerVar[Prefix;$guildID]slots\`\n(Current: $getVar[Coi]$getGlobalUserVar[slotAmount;$findUser[$message;yes]])\nReward: +<:RPGCoin:855767372534906920>100\n\n]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;$userAvatar[$authorID]]
$globalCooldown[5s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
`
}
