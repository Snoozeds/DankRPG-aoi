module.exports = [{
name: "shop",
prototype: "slash",
type: "interaction",
$if: "v4",
code: `
$interactionReply[;
{newEmbed:
{title:Welcome to my shop!}
{description:Here are my items on sale.\n
<:hpDrop:915888646454927380> **__hpDrop__**\nIncreases your HP by 100. | $getVar[Coi]**750**\n/buy hp \n
$if[$getGlobalUserVar[PickL;$authorID]==1] \n<:pickaxe:963846459126583347> **__Pickaxe__** \nDecreases your mining speed by 5m. | **100 Stone** \n**In stock: $getGlobalUserVar[PickL;$authorID]** \n/buy pick \n\n $endif $if[$getGlobalUserVar[BaitL;$authorID]==1] \n<:Bait:916369932072128544> **__Bait__** \nFind double the animals in \`$getServerVar[Prefix]hunt\`. | **100 Slime** \n**In stock: $getGlobalUserVar[BaitL;$authorID]** \n/buy bait \n\n $endif
Other Shop commands:\n\`upgrade\`, \`hp\`, \`heal\`, \`petshop\`}
{color:$getGlobalUserVar[EmbedColor]}}
]
`
}]