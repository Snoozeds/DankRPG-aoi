module.exports = [{
name: "dungeon",
aliases: ["startdungeon", "dun", "dung", "du"],
$if: "v4",
category: "Economy",
description: "Start a dungeon run. Chance of losing coins, finding coins/megacoins",
code: `

$if[$getGlobalUserVar[Coins;$authorID]<=500]
$title[1;You don't have enough coins!]
$description[1;You need at least **$getVar[Coi]500** to start a dungeon!]
$color[1;#ff2050]
$endif

$if[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaSword;$authorID]==True];true;$randomText[Loot;Loot;Loot;Enemy];1];false;$randomText[Loot;Loot;Loot;Enemy;Enemy];1]==Loot]
$title[1;$username[$authorID], you start a dungeon...]
$description[1;You find **$randomText[$getVar[Coi]$random[500;1000];$getVar[Coi]$random[500;1000];$getVar[MegaCoi]1]**!]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[1h;{newEmbed:{title:Slow down $username[$authorID]!}{description:You are tired from your last dungeon.\nYou can use \`dungeon\` again in **%min%m %sec%s**.}{color:#ff2050}}]

$if[$randomText[$getVar[Coi]$random[500;1000];$getVar[Coi]$random[500;1000];$getVar[MegaCoi]1]==$getVar[MegaCoi]1]
$setGlobalUserVar[MegaCoins;$sum[$getGlobalUserVar[MegaCoins;$authorID];1];$authorID]
$else
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[500;1000]];$authorID]
$endif

$else
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaSword;$authorID]==True];true;$randomText[$round[$divide[$getGlobalUserVar[Coins;$authorID];6]];$round[$divide[$getGlobalUserVar[Coins;$authorID];7]]]];false;$randomText[$round[$divide[$getGlobalUserVar[Coins;$authorID];4]];$round[$divide[$getGlobalUserVar[Coins;$authorID];5]]];1]];$authorID]
$title[1;$username[$authorID], you start a dungeon...]
$description[1;You get attacked while in the dungeon!
You **lose $getVar[Coi]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaSword;$authorID]==True];true;$randomText[$round[$divide[$getGlobalUserVar[Coins;$authorID];6]];$round[$divide[$getGlobalUserVar[Coins;$authorID];7]]]];false;$randomText[$round[$divide[$getGlobalUserVar[Coins;$authorID];4]];$round[$divide[$getGlobalUserVar[Coins;$authorID];5]]];1]** while escaping!]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[1h;{newEmbed:{title:Slow down $username[$authorID]!}{description:You are tired from your last dungeon.\nYou can use \`dungeon\` again in **%min%m %sec%s**.}{color:#ff2050}}]
$endif
`
}]