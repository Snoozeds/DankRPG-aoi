module.exports = {
	name: "upgrade",
	$if: "v4",
	aliases: ["prestige", "rankup"],
	code: `
	$if[$getGlobalUserVar[ATK;$authorID]==1]
	You upgraded to 2ATK for <:RPGCoin:855767372534906920>**500**.
**Congratulations!** You unlocked an achievement: "On Another Level"\n+<:RPGCoin:855767372534906920>**150**.
	$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];500];$authorID]
	$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];150];$authorID]
	$setGlobalUserVar[ATK;2;$authorID]
	$setGlobalUserVar[ATKAchievement;<:Unlocked:899050875719393281>]
	$onlyIf[$getGlobalUserVar[Coins;$authorID]>499;You do not have enough <:RPGCoin:855767372534906920> to upgrade. You need at least <:RPGCoin:855767372534906920>**500**.]
	$else

	$if[$getGlobalUserVar[ATK;$authorID]==2]
	You upgraded to 3ATK for <:RPGCoin:855767372534906920>**1000**.
	$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];1000];$authorID]
	$setGlobalUserVar[ATK;3;$authorID]
	$onlyIf[$getGlobalUserVar[Coins;$authorID]>999;You do not have enough <:RPGCoin:855767372534906920> to upgrade. You need at least <:RPGCoin:855767372534906920>**1000**.]
	$setGlobalUserVar[ATKAchievement;<:Unlocked:899050875719393281>]

	$else
	$if[$getGlobalUserVar[ATK;$authorID]==3]
	You upgraded to 4ATK for <:RPGCoin:855767372534906920>**1500**.
	$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];1500];$authorID]
	$setGlobalUserVar[ATK;4;$authorID]
	$onlyIf[$getGlobalUserVar[Coins;$authorID]>1499;You do not have enough <:RPGCoin:855767372534906920> to upgrade. You need at least <:RPGCoin:855767372534906920>**1500**.]
	$setGlobalUserVar[ATKAchievement;<:Unlocked:899050875719393281>]

	$else
	$if[$getGlobalUserVar[ATK;$authorID]==4]
	You upgraded to 5ATK for <:RPGCoin:855767372534906920>**2000**.
	$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];2000];$authorID]
	$setGlobalUserVar[ATK;5;$authorID]
	$onlyIf[$getGlobalUserVar[Coins;$authorID]>1999;You do not have enough <:RPGCoin:855767372534906920> to upgrade. You need at least <:RPGCoin:855767372534906920>**2000**.]
	$setGlobalUserVar[ATKAchievement;<:Unlocked:899050875719393281>]

	$else
	$if[$getGlobalUserVar[ATK;$authorID]==5]
	You have the max ATK. Congrats!
	$setGlobalUserVar[ATKAchievement;<:Unlocked:899050875719393281>]

	$endif
	$endif
	$endif
	$endif
	$endif
	$suppressErrors
	$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
	$onlyIf[$isBot[$authorID]!=true;]
	`
}
