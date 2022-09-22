module.exports = {
name: "achievements",
aliases: ["ach"],
$if: "v4",
code: `$onlyIf[$isBot[$get[u]]!=true;you cannot check a bot's achievements.]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]
$title[1;$username[$get[u]]'s achievements]
$description[1;**__On Another Level__**[$getGlobalUserVar[ATKAchievement;$get[u]]]\nUpgrade to 2ATK.\nReward:  +<:RPGCoin:855767372534906920>150\n\n**__Your first time__** [$getGlobalUserVar[DailyAchievement;$get[u]]]\nCollect your daily reward for the first time.\nReward: +<:RPGCoin:855767372534906920>100\n\n**__The family farm__**[$getGlobalUserVar[FarmAchievement;$get[u]]]\nGo farming at least once.\nReward: +<:RPGCoin:855767372534906920>50\n\n**__Slots Addict__**[$getGlobalUserVar[slotAchievement;$get[u]]]\nSpent a total of $getVar[Coi]1000 on \`$getServerVar[Prefix;$guildID]slots\`$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[slotAmount;$get[u]]>=1000];true;;1];false; (Current: $getVar[Coi]$getGlobalUserVar[slotAmount;$get[u]]);1]\nReward: +<:RPGCoin:855767372534906920>100\n\n]

$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;$userAvatar[$get[u]]]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`achievements\` again in **%sec%s**.}
{color:#ff2050}}]

$let[u;$findUser[$message;yes]]
`
}
