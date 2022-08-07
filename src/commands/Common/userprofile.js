module.exports = {
name : "p",
aliases : ["profile", "user", "stats", "bal"],
code: `
$onlyIf[$isBot[$findUser[$message;yes]]!=true;You cannot check a bot's profile.]
$title[1;$username[$findUser[$message;yes]]'s profile]
$description[1;
<:RPGCoin:855767372534906920>**$getGlobalUserVar[Coins;$findUser[$message;yes]]** \`Coins\`
<:RPGHeart:855755205102534686>$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[HP;$findUser[$message;yes]]==$getGlobalUserVar[MaxHP;$findUser[$message;yes]]];true;**$getGlobalUserVar[HP;$findUser[$message;yes]]**;1];false;**$getGlobalUserVar[HP;$findUser[$message;yes]]/$getGlobalUserVar[MaxHP;$findUser[$message;yes]]**;1] \`HP\`
<:ATKF:915551150093250592>**$getGlobalUserVar[ATK;$findUser[$message;yes]]** \`ATK\`
]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]
$image[1;$replaceText[$getUserBanner[$findUser[$message;yes];1024];null;;1]]
$color[1;$getGlobalUserVar[EmbedColor]]
$globalCooldown[5s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
`
}