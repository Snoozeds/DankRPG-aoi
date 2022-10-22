module.exports = {
name: "shop",
$if: "v4",
category: "Shop",
description: "Shows the shop.",
usage: "N/A",
code: `
$title[1;Welcome to my shop!]
$description[1;Here are my items on sale.\n
<:hpDrop:915888646454927380> **__hpDrop__**\nIncreases your MaxHP by 100. | <:RPGCoin:855767372534906920>**750**\n$getServerVar[Prefix]buyhp \n
$if[$getGlobalUserVar[PickL;$authorID]==1] \n<:pickaxe:963846459126583347> **__Pickaxe__** \nDecreases your mining speed by 5m. | **100 Stone** \n**In stock: $getGlobalUserVar[PickL;$authorID]** \n$getServerVar[Prefix]buypick \n\n $endif $if[$getGlobalUserVar[BaitL;$authorID]==0] \n<:Bait:916369932072128544> **__Bait__** \nFind double the animals in \`$getServerVar[Prefix;$guildID]hunt\` and \`$getServerVar[Prefix;$guildID]pethunt\`. | **100 Slime** \n**In stock: $getGlobalUserVar[BaitL;$authorID]** \n$getServerVar[Prefix]buybait \n\n $endif
Other Shop commands:\n\`megashop\`,\`upgrade\`, \`hp\`, \`heal\`, \`petshop\`]
$color[1;$getGlobalUserVar[EmbedColor]]`
}
