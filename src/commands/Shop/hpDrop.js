module.exports = {
name: "buyhp",
aliases: "buy hp",
code: `
You bought a hp drop for <:RPGCoin:855767372534906920>**750**.
$setGlobalUserVar[MaxHP;$sum[$getGlobalUserVar[MaxHP];100];$authorID]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins];750]]
$onlyIf[$getGlobalUserVar[Coins;$authorID]>749;You do not have enough <:RPGCoin:855767372534906920> to buy a **hpDrop**. You need at least <:RPGCoin:855767372534906920>**750**.]
$onlyIf[$getGlobalUserVar[MaxHP;$authorID]!=1000;You have the maximum amount of hp.]
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
`
}
