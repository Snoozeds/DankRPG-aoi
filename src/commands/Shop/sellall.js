module.exports = {
name: "sellall",
aliases: ["sell all", "sell"],
$if: "v4",
code: `
$setGlobalUserVar[Gold;0;$authorID]
$setGlobalUserVar[Diamond;0;$authorID]
$setGlobalUserVar[Stone;0;$authorID]
$setGlobalUserVar[foxStock;0;$authorID]
$setGlobalUserVar[deerStock;0;$authorID]
$setGlobalUserVar[mooseStock;0;$authorID]
$setGlobalUserVar[rabbitStock;0;$authorID]
$setGlobalUserVar[Wood;0;$authorID]
$setGlobalUserVar[Slime;0;$authorID]

$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$sum[$multi[$getGlobalUserVar[Stone;$authorID];3];$multi[$getGlobalUserVar[Gold;$authorID];20];$multi[$getGlobalUserVar[Diamond;$authorID];100];$multi[$getGlobalUserVar[foxStock;$authorID];50];$multi[$getGlobalUserVar[deerStock;$authorID];75];$multi[$getGlobalUserVar[mooseStock;$authorID];100];$multi[$getGlobalUserVar[rabbitStock;$authorID];125];$multi[$getGlobalUserVar[Wood;$authorID];1];$multi[$getGlobalUserVar[Slime;$authorID];2]]];$authorID]

$wait[1s]
$username[$authorID]: You sold your items for $getVar[Coi]**$sum[$multi[$getGlobalUserVar[Stone;$authorID];3];$multi[$getGlobalUserVar[Gold;$authorID];20];$multi[$getGlobalUserVar[Diamond;$authorID];30];$multi[$getGlobalUserVar[foxStock;$authorID];50];$multi[$getGlobalUserVar[deerStock;$authorID];75];$multi[$getGlobalUserVar[mooseStock;$authorID];100];$multi[$getGlobalUserVar[rabbitStock;$authorID];125];$multi[$getGlobalUserVar[Wood;$authorID];1]]**
$suppressErrors[Something went wrong. You probably have nothing to sell.]
`
}