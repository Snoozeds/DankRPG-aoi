module.exports = [{
name : "hp",
aliases: "health",
category: "Shop",
description: "Shows your current health and how much it would cost to heal.",
usage: "N/A",
code: `
$onlyIf[$getGlobalUserVar[HP]!=$getGlobalUserVar[MaxHP];You are at max hp :)]
<:RPGHeart:855755205102534686>\`$getGlobalUserVar[HP]/$getGlobalUserVar[MaxHP]\`  | <:RPGCoin:855767372534906920>\`$getGlobalUserVar[Coins;$authorID]\`\nHealing will cost you <:RPGCoin:855767372534906920>**$multi[$sub[$getGlobalUserVar[MaxHP];$getGlobalUserVar[HP]];2]**.\nTo heal, run $getServerVar[Prefix;$guildID]heal
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
`
},

{
name : "heal",
category: "Shop",
description: "Heals you to maxHP.",
usage: "N/A",
code : `
$setGlobalUserVar[HP;$getGlobalUserVar[MaxHP];$authorID]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];$multi[$sub[$getGlobalUserVar[MaxHP];$getGlobalUserVar[HP]];2]]]
$wait[1s]
$onlyIf[$getGlobalUserVar[Coins]>=$multi[$sub[$getGlobalUserVar[MaxHP];$getGlobalUserVar[HP]];2];You do not have enough coins to heal.]
$onlyIf[$getGlobalUserVar[HP]!=$getGlobalUserVar[MaxHP];You are already at max hp :)]
$botTyping
$username[$authorID], You healed <:RPGHeart:855755205102534686>**$sub[$getGlobalUserVar[MaxHP];$getGlobalUserVar[HP]]** for <:RPGCoin:855767372534906920>**$multi[$sub[$getGlobalUserVar[MaxHP];$getGlobalUserVar[HP]];2]**.
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
`
}]
