module.exports = {
name: "inventory",
$if: "v4",
aliases: ["inv", "i"],
code: `$title[1;$username[$findUser[$message;yes]]'s Inventory]
$description[1;
$if[$getGlobalUserVar[Wood;$findUser[$message;yes]]!=0]
**Wood:** $getGlobalUserVar[Wood;$findUser[$message;yes]]
$endif
$if[$getGlobalUserVar[Slime;$findUser[$message;yes]]!=0]
**Slime:** $getGlobalUserVar[Slime;$findUser[$message;yes]]
$endif
$if[$getGlobalUserVar[Stone;$findUser[$message;yes]]!=0]
**Stone:** $getGlobalUserVar[Stone;$findUser[$message;yes]]
$endif
$if[$getGlobalUserVar[Gold;$findUser[$message;yes]]!=0]
**Gold:** $getGlobalUserVar[Gold;$findUser[$message;yes]]
$endif
$if[$getGlobalUserVar[Diamond;$findUser[$message;yes]]!=0]
**Diamonds:** $getGlobalUserVar[Diamond;$findUser[$message;yes]]
$endif
]
$color[1;$getGlobalUserVar[EmbedColor]]
$globalCooldown[5s;Please wait **%time%**.]
$onlyIf[$isBot[$authorID]!=true;]`
}
