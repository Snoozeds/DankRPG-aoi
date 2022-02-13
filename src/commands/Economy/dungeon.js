module.exports = {
name: "dungeon",
aliases: "startdungeon",
code: `You start a dungeon.
$if[$randomText[Loot;Enemy]==Enemy]
You find an enemy. It damages you, and you lose $getVar[Heart]$random[5;10].
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP;$authorID];$random[5;10]];$authorID]
$else
$title[Random Event!]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$description[You find $getVar[Coi]$random[25;50].]
$thumbnail[https://assets.dankrpg.xyz/Images/chest.png]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[25;50]];$authorID]
$endif
$globalCooldown[30s;Please wait **%time%** before starting another dungeon.]`
}
