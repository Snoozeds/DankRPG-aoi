module.exports = {
name: "buy pickaxe",
aliases: ["buypickaxe", "buypick"],
code: `
You bought a pickaxe for **100 Stone**
$setGlobalUserVar[Stone;$sub[$getGlobalUserVar[Stone];100];$authorID]
$setGlobalUserVar[BoughtPick;True;$authorID]
$setGlobalUserVar[PickL;0;$authorID]
$setGlobalUserVar[MiningTime;5m;$authorID]
$onlyIf[$getGlobalUserVar[Stone;$authorID]>99;You do not have enough **stone** to buy a **pickaxe**. You need at least **100 Stone**.]
$onlyIf[$getGlobalUserVar[BoughtPick]!=True;You already have a pickaxe smh]`
}