module.exports = {
	name: "achievements",
	code: `$if[$isBot[$findUser[$message;yes]]==true]
	You cannot check a bot's achievements.
	$else
	
	$if[$getGlobalUserVar[ATK;$authorID]==2]
	$setGlobalUserVar[ATKAchievement;<:Unlocked:899050875719393281>]
	$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]
	$title[$username[$findUser[$message;yes]]'s achievements]
	$description[**__On Another Level__**[$getGlobalUserVar[ATKAchievement;$findUser[$message;yes]]]\nUpgrade to 2ATK.\nReward:  +<:RPGCoin:855767372534906920>150\n\n**__Your first time__** [$getGlobalUserVar[DailyAchievement;$findUser[$message;yes]]]\nCollect your daily reward for the first time.\nReward: +<:RPGCoin:855767372534906920>100\n\n**__The family farm__**[$getGlobalUserVar[FarmAchievement;$findUser[$message;yes]]]\nGo farming at least once.\nReward: +<:RPGCoin:855767372534906920>50\n\n
	$color[$getGlobalUserVar[EmbedColor;$authorID]]

	$else
	$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]
	$title[$username[$findUser[$message;yes]]'s achievements]
	$description[**__On Another Level__**[$getGlobalUserVar[ATKAchievement;$findUser[$message;yes]]]\nUpgrade to 2ATK.\nReward:  +<:RPGCoin:855767372534906920>150\n\n**__Your first time__** [$getGlobalUserVar[DailyAchievement;$findUser[$message;yes]]]\nCollect your daily reward for the first time.\nReward: +<:RPGCoin:855767372534906920>100\n\n**__The family farm__**[$getGlobalUserVar[FarmAchievement;$findUser[$message;yes]]]\nGo farming at least once.\nReward: +<:RPGCoin:855767372534906920>50\n\n
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$endif
	$endif
	$globalCooldown[15s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
	$suppressErrors`
} // Fix ATK not saving bug
