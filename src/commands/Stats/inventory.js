module.exports = {
    name: "inventory",
    aliases: ["inv", "i"],
    code: `$title[$username[$findUser[$message;yes]]'s Inventory]
    $description[**Wood:** $getGlobalUserVar[Wood;$findUser[$message;yes]]
**Stone:** $getGlobalUserVar[Stone;$findUser[$message;yes]]
**Slime:** $getGlobalUserVar[Slime;$findUser[$message;yes]]
]
$color[$getGlobalUserVar[EmbedColor]]
$globalCooldown[5s;Please wait **%time%**.]
    `
}
