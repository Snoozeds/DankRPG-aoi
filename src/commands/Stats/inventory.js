module.exports = {
name: "inventory",
aliases: ["inv", "i"],
code: `$title[1;$username[$findUser[$message;yes]]'s Inventory]
$description[1;
$if[$getGlobalUserVar[Wood;$findUser[$message;yes]]!=0;**Wood:** $getGlobalUserVar[Wood;$findUser[$message;yes]]] $if[$getGlobalUserVar[Slime;$findUser[$message;yes]]!=0;\n**Slime:** $getGlobalUserVar[Slime;$findUser[$message;yes]]] $if[$getGlobalUserVar[Stone;$findUser[$message;yes]]!=0;\n**Stone:** $getGlobalUserVar[Stone;$findUser[$message;yes]]] $if[$getGlobalUserVar[Gold;$findUser[$message;yes]]!=0;\n**Gold:** $getGlobalUserVar[Gold;$findUser[$message;yes]]] $if[$getGlobalUserVar[Diamond;$findUser[$message;yes]]!=0;\n**Diamonds:** $getGlobalUserVar[Diamond;$findUser[$message;yes]]] 
]
$color[1;$getGlobalUserVar[EmbedColor]]
$globalCooldown[3s;Please wait **%time%**.]
`
}
