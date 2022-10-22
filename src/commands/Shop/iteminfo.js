module.exports = [{
name: "iteminfo hpdrop",
aliases: ["iteminfo hp", "iteminfohp", "iteminfohpdrop", "iteminfo hp drop"],
category: "Shop",
description: "Shows information about the hpDrop item.",
usage: "N/A",
code: `
$title[1;Item Info]
$description[1;
**Item: hpDrop**
**Price: $getVar[Coi]750**
**Description: Increases your MaxHP by 100.**]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
`
},

{
name: "iteminfo pickaxe",
aliases: ["iteminfo pick", "iteminfopick", "iteminfopickaxe", "iteminfo pick axe"],
category: "Shop",
description: "Shows information about the pickaxe item.",
usage: "N/A",
code: `
$title[1;Item Info]
$description[1;
**Item: Pickaxe**
**Price: 100 Stone**
**Description: Decreases your mining speed by 5m.**]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]`
},

{
name: "iteminfo bait",
aliases: ["iteminfobait"],
category: "Shop",
description: "Shows information about the bait item.",
usage: "N/A",
code: `
$title[1;Item Info]
$description[1;
**Item: Bait**
**Price: 100 Slime**
**Description: Find double the animals in \`$getServerVar[Prefix;$guildID]hunt\` (2), \`$getServerVar[Prefix;$guildID]pethunt\` (4)**]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]`
},

{
name: "iteminfo megasword",
aliases: ["iteminfosword", "iteminfo sword", "iteminfo mega sword", "iteminfomegasword"],
category: "Shop",
description: "Shows information about the megaSword item.",
usage: "N/A",
code: `
$title[1;Item Info]
$description[1;
**Item: Mega Sword**
**Price: $getVar[MegaCoi]10**
**Description:
+ Less chance of taking damage in \`dungeon\`.
+ Substantially higher chance of rewards ($getVar[MegaCoi], $getVar[Coi]) in \`dungeon\`.
+ Lose less Coins in \`dungeon\`.**]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]`
},

{
name: "iteminfo megapickaxe",
aliases: ["iteminfomegapickaxe", "iteminfo megapickaxe", "iteminfo mega pickaxe", "iteminfo megapick", "iteminfomegapick", "iteminfo mega pick"],
category: "Shop",
description: "Shows information about the megaPickaxe item.",
usage: "N/A",
code: `
$title[1;Item Info]
$description[1;
**Item: Mega Pickaxe**
**Price: $getVar[MegaCoi]10**
**Description: Your mine time is now 1m.**]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]`
}]