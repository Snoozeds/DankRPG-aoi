module.exports = {
name: "buy bait",
aliases: ["buybait"],
category: "Shop",
description: "Buys bait.",
usage: "N/A",
code: `
You bought bait for **100 Slime**
$setGlobalUserVar[Slime;$sub[$getGlobalUserVar[Slime];100];$authorID]
$setGlobalUserVar[BoughtBait;True;$authorID]
$setGlobalUserVar[BaitL;0;$authorID]
$onlyIf[$getGlobalUserVar[Slime;$authorID]>99;You do not have enough **slime** to buy **bait**. You need at least **100 Slime**.]
$onlyIf[$getGlobalUserVar[BoughtBait]!=True;You already have bait smh]`
}