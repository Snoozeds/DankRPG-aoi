module.exports = {
name: "shop",
$if: "v4",
code: `
$title[1;Welcome to my shop!]
$description[1;Here are my items on sale.

<:hpDrop:915888646454927380> **__hpDrop__**
Increases your HP by 100. | <:RPGCoin:855767372534906920>**750**
**In stock: ∞**
$getServerVar[Prefix]buyhp

$if[$getGlobalUserVar[HouseL;$authorID]==1]
<:ItmHouse:921118526876577814> **__House__**
Automatically heals HP as you type. | **500 Wood**
**In stock: $getGlobalUserVar[HouseL;$authorID]**
$getServerVar[Prefix]buyhouse
$endif

$if[$getGlobalUserVar[PickL;$authorID]==1]
<:pickaxe:963846459126583347> **__Pickaxe__**
Decreases your mining speed by 5m. | **100 Stone**
**In stock: $getGlobalUserVar[PickL;$authorID]**
$getServerVar[Prefix]buypick
$endif

$if[$getGlobalUserVar[BaitL;$authorID]==1]
<:Bait:916369932072128544> **__Bait__**
Find double the animals in \`$getServerVar[Prefix]hunt\`. | **50 Slime**
**In stock: $getGlobalUserVar[BaitL;$authorID]**
$getServerVar[Prefix]buybait
$endif

Other Shop commands:\n\`upgrade\`, \`hp\`, \`heal\`, \`petshop\`]
$color[1;$getGlobalUserVar[EmbedColor]]
`
}
