module.exports = {
name: "inventory",
aliases: ["inv", "i", "in"],
category: "Economy",
description: "Shows your or another user's inventory.",
usage: "(optional: <user>)",
code: `$title[1;$username[$get[u]]'s Inventory]
$description[1;
$if[$getGlobalUserVar[Wood;$get[u]]!=0;**:wood: Wood:** $getGlobalUserVar[Wood;$get[u]]] $if[$getGlobalUserVar[Slime;$get[u]]!=0;\n**$getVar[SlimeEmoji] Slime:** $getGlobalUserVar[Slime;$get[u]]] $if[$getGlobalUserVar[Stone;$get[u]]!=0;\n**$getVar[StoneEmoji] Stone:** $getGlobalUserVar[Stone;$get[u]]] $if[$getGlobalUserVar[Gold;$get[u]]!=0;\n**$getVar[GoldEmoji] Gold:** $getGlobalUserVar[Gold;$get[u]]] $if[$getGlobalUserVar[Diamond;$get[u]]!=0;\n**$getVar[DiamondEmoji] Diamonds:** $getGlobalUserVar[Diamond;$get[u]]] $if[$getGlobalUserVar[HPPotion;$get[u]]!=0;\n**<:hppotion:1022298361702920353> HP Potions:** $getGlobalUserVar[HPPotion;$get[u]]] $if[$getGlobalUserVar[foxStock;$get[u]]!=0;\n**Foxes:** $getGlobalUserVar[foxStock;$get[u]]] $if[$getGlobalUserVar[deerStock;$get[u]]!=0;\n**Deer:** $getGlobalUserVar[deerStock;$get[u]]] $if[$getGlobalUserVar[mooseStock;$get[u]]!=0;\n**Moose:** $getGlobalUserVar[mooseStock;$get[u]]] $if[$getGlobalUserVar[rabbitStock;$get[u]]!=0;\n**Rabbits:** $getGlobalUserVar[rabbitStock;$get[u]]]

Total inventory value: $getVar[Coi]$sum[$multi[$getGlobalUserVar[Stone;$get[u]];3];$multi[$getGlobalUserVar[Gold;$get[u]];20];$multi[$getGlobalUserVar[Diamond;$get[u]];100];$multi[$getGlobalUserVar[foxStock;$get[u]];50];$multi[$getGlobalUserVar[deerStock;$get[u]];75];$multi[$getGlobalUserVar[mooseStock;$get[u]];100];$multi[$getGlobalUserVar[rabbitStock;$get[u]];125];$multi[$getGlobalUserVar[Wood;$get[u]];1];$multi[$getGlobalUserVar[Slime;$get[u]];2]]]
$color[1;$getGlobalUserVar[EmbedColor]]
$thumbnail[$userAvatar[$get[u]]]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`inventory\` again in **%sec%s**.}
{color:#ff2050}}]

$let[u;$findUser[$message;yes]]
`
}
