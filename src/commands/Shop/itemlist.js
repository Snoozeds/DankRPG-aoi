module.exports = {
name: "itemlist",
aliases: ["listitems", "items", "itemlist", "itemslist"],
code: `
$title[1;Items]
$description[1;List of items:
$addField[1;**__Wood:__**;Sell price: $getVar[Coi]**1**]
$addField[1;$getVar[SlimeEmoji]**__Slime:__**;Sell price: $getVar[Coi]**2**]
$addField[1;$getVar[StoneEmoji]**__Stone:__**;Sell price: $getVar[Coi]**3**]
$addField[1;$getVar[GoldEmoji]**__Gold:__**;Sell price: $getVar[Coi]**20**]
$addField[1;**__Fox:__**;Sell price: $getVar[Coi]**50**]
$addField[1;**__Deer:__**;Sell price: $getVar[Coi]**75**]
$addField[1;$getVar[DiamondEmoji]**__Diamond:__**;Sell price: $getVar[Coi]**100**]
$addField[1;**__Moose:__**;Sell price: $getVar[Coi]**100**]
$addField[1;**__Rabbit:__**;Sell price: $getVar[Coi]**125**]
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
`
}