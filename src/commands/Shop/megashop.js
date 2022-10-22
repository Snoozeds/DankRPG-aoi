module.exports = [{
name: "megashop",
aliases: "mega shop",
$if: "v4",
category: "Shop",
description: "Shows the mega shop.",
usage: "N/A",
code: `
$title[1;Welcome to my MEGA shop!]
$description[1;
**__UPGRADES__**

**Daily MC: [$getVar[Coi]5000]** **[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaCoins;$authorID]==0];true;:x:;1];false;:white_check_mark:;1]]**
The \`daily\` command now gives you +$getVar[MegaCoi]**1**.
Only buyable once.

**Daily MC Amount: [$getVar[MegaCoi]5]** **[$sub[$getGlobalUserVar[DailyMCGain;$authorID];1]]**
Increases your MegaCoin gain in \`daily\` by **1**.
Requires \`Daily MC\`.

**__ITEMS__**

**Mega Sword: [$getVar[MegaCoi]10]** **[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaSword;$authorID]==False];true;:x:;1];false;:white_check_mark:;1]]**
+ Less chance of taking damage in \`dungeon\`.
+ Substantially higher chance of rewards ($getVar[MegaCoi], $getVar[Coi]) in \`dungeon\`.
+ Lose less Coins in \`dungeon\`.

**Mega Pickaxe: [$getVar[MegaCoi]15]** **[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaPickaxe;$authorID]==False];true;:x:;1];false;:white_check_mark:;1]]**
Your mine time is now 1m.\n
]
$footer[1;$getServerVar[Prefix]buy <upgrade/item> to buy something.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]`
},

{
name: "buy daily mc",
aliases: ["buydailymc", "buydailymegacoins", "buy daily megacoins", "buy daily mega coins", "buy dailymc"],
category: "Shop",
description: "Buys the daily mega coins upgrade.",
usage: "N/A",
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
aliases: ["buydailymcamount", "buydailymegacoinsamount", "buy daily megacoins amount", "buy daily mega coins amount", "buy dailymcamount", "buydailymcgain", "buy dailymcgain", "buy daily mc gain"],
code: `
$setGlobalUserVar[DailyMCGain;$sum[$getGlobalUserVar[DailyMCGain;$authorID];1];$authorID]
$setGlobalUserVar[MegaCoins;$sub[$getGlobalUserVar[MegaCoins;$authorID];5];$authorID]
$title[1;Success!]
$description[1;You bought **Daily MC Amount** for **$getVar[MegaCoi]5**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$onlyIf[$getGlobalUserVar[DailyMCGain;$authorID]!=0;You don't have the \`Daily MC\` upgrade!]
$onlyIf[$getGlobalUserVar[MegaCoins;$authorID]>=5;You don't have enough MegaCoins!]
$onlyIf[$getGlobalUserVar[DailyMCGain;$authorID]<=50;You have the maximum amount of \`Daily MC Amount\` upgrades!]
`
},

{
name: "buy mega sword",
aliases: ["buymegasword", "buy megasword"],
category: "Shop",
description: "Buys the mega sword.",
usage: "N/A",
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
category: "Shop",
description: "Buys the mega pickaxe.",
usage: "N/A",
code: `
$setGlobalUserVar[MegaPickaxe;True;$authorID]
$setGlobalUserVar[MiningTime;1m;$authorID]
$setGlobalUserVar[MegaCoins;$sub[$getGlobalUserVar[MegaCoins;$authorID];15];$authorID]
$title[1;Success!]
$description[1;You bought a **Mega Pickaxe** for **$getVar[MegaCoi]15**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$onlyIf[$getGlobalUserVar[MegaPickaxe;$authorID]!=True;You already have this item!]
$onlyIf[$getGlobalUserVar[MegaCoins;$authorID]>=$getVar[MegaCoi]15;You don't have enough MegaCoins!]
`
}
]