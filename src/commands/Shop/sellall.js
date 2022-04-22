module.exports = {
name: "sellall",
$if: "v4",
code: `
$setGlobalUserVar[Gold;0;$authorID]
$setGlobalUserVar[Diamond;0;$authorID]
$setGlobalUserVar[Stone;0;$authorID]
$setGlobalUserVar[foxStock;0;$authorID]
$setGlobalUserVar[deerStock;0;$authorID]
$setGlobalUserVar[mooseStock;0;$authorID]
$setGlobalUserVar[rabbitStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$sum[$multi[$getGlobalUserVar[Stone;$authorID];3];$multi[$getGlobalUserVar[Gold;$authorID];20];$multi[$getGlobalUserVar[Diamond;$authorID];30];$multi[$getGlobalUserVar[foxStock;$authorID];50];$multi[$getGlobalUserVar[deerStock;$authorID];75];$multi[$getGlobalUserVar[mooseStock;$authorID];100];$multi[$getGlobalUserVar[rabbitStock;$authorID];125]]];$authorID]
$wait[1s]
You sold **$sum[$getGlobalUserVar[foxStock];$sum[$getGlobalUserVar[deerStock];$getGlobalUserVar[mooseStock];$getGlobalUserVar[rabbitStock];$getGlobalUserVar[Stone;$authorID];$getGlobalUserVar[Gold;$authorID];$getGlobalUserVar[Diamond;$authorID]]] items** for $getGlobalUserVar[Coins;$authorID] coins.
$suppressErrors[Something went wrong. You probably have nothing to sell.]
`
}