module.exports = {
name: "inventory",
aliases: ["inv", "i"],
code: `$title[$username[$findUser[$message;yes]]'s Inventory]
$description[
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
$color[$getGlobalUserVar[EmbedColor]]
$globalCooldown[5s;Please wait **%time%**.]
$onlyIf[$isBot[$authorID]!=true;]`
}
