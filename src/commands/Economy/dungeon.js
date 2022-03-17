module.exports = [{
name: "dungeon",
aliases: "startdungeon",
$if: "v4",
code: `
You start a dungeon.
$if[$randomText[Loot;Enemy]==Enemy]
You find an enemy. It damages you, and you lose $getVar[Heart]$random[10;20].
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP;$authorID];$random[10;20]];$authorID]
$elseIf[$randomText[ChestEvent;MinigameEvent]==ChestEvent]
You found a chest! It contains $getVar[Coi]**$random[25;50]**
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[25;50]];$authorID]
$endelseIf
$elseIf[$randomText[ChestEvent;MinigameEvent]==MinigameEvent]
**MINIGAME:** Type **$randomText[Dank;Fight;Defend]** in chat to earn your reward!
$awaitMessages[$authorID;7s;$randomText[Dank;Fight;Defend];DungeonR;:x: Sorry, you didn't respond in time. You don't get anything.]
$endelseIf
$endif
$globalCooldown[30s;Please wait **%time%** before starting another dungeon.]
$onlyIf[$isBot[$authorID]!=true;]
`
},

{
name: "DungeonR",
type: "awaitedCommand",
code: `You responded in time! You earned <:RPGCoin:855767372534906920>**$random[50;60]**.
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[50;60]];$authorID]
$onlyIf[$isBot[$authorID]!=true;]
`
}]