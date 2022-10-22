module.exports = {
name : "p",
aliases : ["profile", "user", "stats", "bal"],
code: `
$onlyIf[$isBot[$get[u]]!=true;You cannot check a bot's profile.]
$title[1;$username[$get[u]]'s profile]
$description[1;
$getVar[Coi]**$getGlobalUserVar[Coins;$get[u]]** \`Coins\`
$getVar[MegaCoi]**$getGlobalUserVar[MegaCoins;$get[u]]** \`MegaCoins\`
$getVar[Heart]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[HP;$get[u]]==$getGlobalUserVar[MaxHP;$get[u]]];true;**$getGlobalUserVar[HP;$get[u]]**;1];false;**$getGlobalUserVar[HP;$get[u]]/$getGlobalUserVar[MaxHP;$get[u]]**;1] \`HP\`
<:ATKF:915551150093250592>**$getGlobalUserVar[ATK;$get[u]]** \`ATK\`
]
$thumbnail[1;$userAvatar[$get[u]]]
$image[1;$replaceText[$getUserBanner[$get[u];1024];null;;1]]
$color[1;$getGlobalUserVar[EmbedColor]]

$globalCooldown[5s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`profile\` again in **%sec%s**.}
{color:#ff2050}}]

$let[u;$findUser[$message;yes]]
`
}