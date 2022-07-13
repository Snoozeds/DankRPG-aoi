module.exports = {
name: "inventory",
aliases: ["inv", "i", "in"],
code: `$title[1;$username[$findUser[$message;yes]]'s Inventory]
$description[1;
$if[$getGlobalUserVar[Wood;$findUser[$message;yes]]!=0;**Wood:** $getGlobalUserVar[Wood;$findUser[$message;yes]]] $if[$getGlobalUserVar[Slime;$findUser[$message;yes]]!=0;\n**Slime:** $getGlobalUserVar[Slime;$findUser[$message;yes]]] $if[$getGlobalUserVar[Stone;$findUser[$message;yes]]!=0;\n**Stone:** $getGlobalUserVar[Stone;$findUser[$message;yes]]] $if[$getGlobalUserVar[Gold;$findUser[$message;yes]]!=0;\n**Gold:** $getGlobalUserVar[Gold;$findUser[$message;yes]]] $if[$getGlobalUserVar[Diamond;$findUser[$message;yes]]!=0;\n**Diamonds:** $getGlobalUserVar[Diamond;$findUser[$message;yes]]] $if[$getGlobalUserVar[foxStock;$findUser[$message;yes]]!=0;\n**Foxes:** $getGlobalUserVar[foxStock;$findUser[$message;yes]]] $if[$getGlobalUserVar[deerStock;$findUser[$message;yes]]!=0;\n**Deer:** $getGlobalUserVar[deerStock;$findUser[$message;yes]]] $if[$getGlobalUserVar[mooseStock;$findUser[$message;yes]]!=0;\n**Moose:** $getGlobalUserVar[mooseStock;$findUser[$message;yes]]] $if[$getGlobalUserVar[rabbitStock;$findUser[$message;yes]]!=0;\n**Rabbits:** $getGlobalUserVar[rabbitStock;$findUser[$message;yes]]]
]
$color[1;$getGlobalUserVar[EmbedColor]]
$globalCooldown[3s;Please wait. %time%]
`
} // Yes, this does look like a mess. Turn on wrapping and it will be somewhat legible.
