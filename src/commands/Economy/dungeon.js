module.exports = {
name: "start dungeon",
code: `You start a dungeon.
$if[$randomText[Loot;Enemy;Enemy]==Enemy]
You find an enemy. It damages you, and you lose $getVar[Heart]$random[5;10].
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP;$authorID];$random[5;10]];$authorID]
$else
You find $getVar[Coi]$random[25;50].
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[25;50]];$authorID]
$endif
$globalCooldown[30s;Please wait **%time%** before starting another dungeon.]`
}
