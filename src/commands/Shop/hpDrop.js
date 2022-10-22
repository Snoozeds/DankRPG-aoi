module.exports = {
name: "buyhp",
aliases: "buy hp",
$if: "v4",
category: "Shop",
description: "Buys a hpDrop, increasing your MaxHP.",
usage: "N/A",
code: `
$if[$getGlobalUserVar[HasPet;$authorID]==false]
$onlyIf[$getGlobalUserVar[MaxHP;$authorID]<999;You have the maximum amount of hp.]
$else
$onlyIf[$getGlobalUserVar[MaxHP;$authorID]<1199;You have the maximum amount of hp.]
$endif
You bought a hp drop for <:RPGCoin:855767372534906920>**750**.
$setGlobalUserVar[MaxHP;$sum[$getGlobalUserVar[MaxHP];100];$authorID]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];750]]
$onlyIf[$getGlobalUserVar[Coins;$authorID]>749;You do not have enough <:RPGCoin:855767372534906920> to buy a **hpDrop**. You need at least <:RPGCoin:855767372534906920>**750**.]
`
}