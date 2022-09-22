module.exports = {
name: "inventory",
aliases: ["inv", "i", "in"],
code: `$title[1;$username[$findUser[$message;yes]]'s Inventory]
$description[1;
$if[$getGlobalUserVar[Wood;$findUser[$message;yes]]!=0;**:wood: Wood:** $getGlobalUserVar[Wood;$findUser[$message;yes]]] $if[$getGlobalUserVar[Slime;$findUser[$message;yes]]!=0;\n**$getVar[SlimeEmoji] Slime:** $getGlobalUserVar[Slime;$findUser[$message;yes]]] $if[$getGlobalUserVar[Stone;$findUser[$message;yes]]!=0;\n**$getVar[StoneEmoji] Stone:** $getGlobalUserVar[Stone;$findUser[$message;yes]]] $if[$getGlobalUserVar[Gold;$findUser[$message;yes]]!=0;\n**$getVar[GoldEmoji] Gold:** $getGlobalUserVar[Gold;$findUser[$message;yes]]] $if[$getGlobalUserVar[Diamond;$findUser[$message;yes]]!=0;\n**$getVar[DiamondEmoji] Diamonds:** $getGlobalUserVar[Diamond;$findUser[$message;yes]]] $if[$getGlobalUserVar[HPPotion;$findUser[$message;yes]]!=0;\n**<:hppotion:1022298361702920353> HP Potions:** $getGlobalUserVar[HPPotion;$findUser[$message;yes]]] $if[$getGlobalUserVar[foxStock;$findUser[$message;yes]]!=0;\n**Foxes:** $getGlobalUserVar[foxStock;$findUser[$message;yes]]] $if[$getGlobalUserVar[deerStock;$findUser[$message;yes]]!=0;\n**Deer:** $getGlobalUserVar[deerStock;$findUser[$message;yes]]] $if[$getGlobalUserVar[mooseStock;$findUser[$message;yes]]!=0;\n**Moose:** $getGlobalUserVar[mooseStock;$findUser[$message;yes]]] $if[$getGlobalUserVar[rabbitStock;$findUser[$message;yes]]!=0;\n**Rabbits:** $getGlobalUserVar[rabbitStock;$findUser[$message;yes]]]

Total inventory value: $getVar[Coi]$sum[$multi[$getGlobalUserVar[Stone;$findUser[$message;yes]];3];$multi[$getGlobalUserVar[Gold;$findUser[$message;yes]];20];$multi[$getGlobalUserVar[Diamond;$findUser[$message;yes]];100];$multi[$getGlobalUserVar[foxStock;$findUser[$message;yes]];50];$multi[$getGlobalUserVar[deerStock;$findUser[$message;yes]];75];$multi[$getGlobalUserVar[mooseStock;$findUser[$message;yes]];100];$multi[$getGlobalUserVar[rabbitStock;$findUser[$message;yes]];125];$multi[$getGlobalUserVar[Wood;$findUser[$message;yes]];1];$multi[$getGlobalUserVar[Slime;$findUser[$message;yes]];2]]]
$color[1;$getGlobalUserVar[EmbedColor]]
$thumbnail[$userAvatar[$findUser[$message;yes]]]
$botTyping

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`inventory\` again in **%sec%s**.}
{color:#ff2050}}]
`
}
