module.exports = [{
name: "megashop",
aliases: "mega shop",
$if: "v4",
code: `
$title[1;Welcome to my MEGA shop!]
$description[1;
**__UPGRADES__**

**Daily MC: [$getVar[Coi]5000]**
The \`daily\` command now gives you +$getVar[MegaCoi]**1**.

**Daily MC Amount: [$getVar[MegaCoi]5]**
Increases your MegaCoin gain in \`daily\` by **1**.
Currently: **$getGlobalUserVar[DailyMCGain;$authorID]**.
Requires \`Daily MC\`.

**__ITEMS__**

**Mega Sword: [$getVar[MegaCoi]10]**
+ Less chance of taking damage in \`dungeon\`.
+ Substantially higher chance of gaining MegaCoins in \`dungeon\`.

**Mega Pickaxe: [$getVar[MegaCoi]25]**
Your mine time is now 1m.\n
]
$footer[1;$getServerVar[Prefix]buy <upgrade/item> to buy something.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]`
},

{
name: "buy daily mc",
aliases: ["buydailymc", "buydailymegacoins", "buy daily megacoins", "buy daily mega coins", "buy dailymc"],
code: `
$title[1;Success!]
$description[1;You bought **Daily MC** for **$getVar[Coi]5000**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[DailyMCGain;1;$authorID]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];5000];$authorID]
$onlyIf[$getGlobalUserVar[DailyMCGain;$authorID]==0;You already have this upgrade!]
$onlyIf[$getGlobalUserVar[Coins;$authorID]>=$getVar[Coi]5000;You don't have enough coins!]
`
},

{
name: "buy daily mc amount",
aliases: ["buydailymcamount", "buydailymegacoinsamount", "buy daily megacoins amount", "buy daily mega coins amount", "buy dailymcamount"],
code: `
$setGlobalUserVar[DailyMCGain;$sum[$getGlobalUserVar[DailyMCGain;$authorID];1];$authorID]
$setGlobalUserVar[MegaCoins;$sub[$getGlobalUserVar[MegaCoins;$authorID];5];$authorID]
$title[1;Success!]
$description[1;You bought **Daily MC Amount** for **$getVar[MegaCoi]5**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$onlyIf[$getGlobalUserVar[DailyMCGain;$authorID]!=0;You don't have the \`Daily MC\` upgrade!]
$onlyIf[$getGlobalUserVar[MegaCoins;$authorID]>=$getVar[MegaCoi]5;You don't have enough MegaCoins!]
`
},

{
name: "buy mega sword",
aliases: ["buymegasword", "buy megasword"],
code: `
$setGlobalUserVar[MegaSword;True;$authorID]
$setGlobalUserVar[MegaCoins;$sub[$getGlobalUserVar[MegaCoins;$authorID];10];$authorID]
$title[1;Success!]
$description[1;You bought a **Mega Sword** for **$getVar[MegaCoi]10**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$onlyIf[$getGlobalUserVar[MegaSword;$authorID]!=True;You already have this item!]
$onlyIf[$getGlobalUserVar[MegaCoins;$authorID]>=$getVar[MegaCoi]10;You don't have enough MegaCoins!]
`
},

{
name: "buy mega pickaxe",
aliases: ["buymegapickaxe", "buy megapickaxe"],
code: `
$setGlobalUserVar[MegaPickaxe;True;$authorID]
$setGlobalUserVar[MiningTime;1m;$authorID]
$setGlobalUserVar[MegaCoins;$sub[$getGlobalUserVar[MegaCoins;$authorID];25];$authorID]
$title[1;Success!]
$description[1;You bought a **Mega Pickaxe** for **$getVar[MegaCoi]25**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$onlyIf[$getGlobalUserVar[MegaPickaxe;$authorID]!=True;You already have this item!]
$onlyIf[$getGlobalUserVar[MegaCoins;$authorID]>=$getVar[MegaCoi]25;You don't have enough MegaCoins!]
`
}
]