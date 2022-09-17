module.exports = [{
name: "megashop",
aliases: "mega shop",
$if: "v4",
code: `
$title[1;Welcome to my MEGA shop!]
$description[1;
**__UPGRADES__**

**Daily MC [$getVar[Coi]5000]**
The \`daily\` command now gives you +$getVar[MegaCoi]**1**.

**Daily MC Amount [$getVar[MegaCoi]$getGlobalUserVar[DailyMCGain_Price;$authorID]]**
Increases your MegaCoin gain in \`daily\` by **1**.
Currently: **$getGlobalUserVar[DailyMCGain;$authorID]**.
Requires \`Daily MC\`.

**__ITEMS__**
Coming very soon...
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
$setGlobalUserVar[DailyMCGain_Price;$sum[$getGlobalUserVar[DailyMCGain_Price;$authorID];1];$authorID]
$setGlobalUserVar[DailyMCGain;$sum[$getGlobalUserVar[DailyMCGain;$authorID];1];$authorID]
$setGlobalUserVar[MegaCoins;$sub[$getGlobalUserVar[MegaCoins;$authorID];$getGlobalUserVar[DailyMCGain_Price;$authorID]];$authorID]
$title[1;Success!]
$description[1;You bought **Daily MC Amount** for **$getVar[MegaCoi]$getGlobalUserVar[DailyMCGain_Price;$authorID]**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$onlyIf[$getGlobalUserVar[DailyMCGain;$authorID]!=0;You don't have the \`Daily MC\` upgrade!]
$onlyIf[$getGlobalUserVar[MegaCoins;$authorID]>=$getVar[MegaCoi]$getGlobalUserVar[DailyMCGain_Price;$authorID];You don't have enough MegaCoins!]
`
}

]