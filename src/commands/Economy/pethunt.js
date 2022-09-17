module.exports = {
name: "pethunt",
aliases: ["pet hunt", "petshunt", "pets hunt", "phunt", "ph"],
$if: "v4",
code:`
<@!$authorID>
$title[1;$username[$authorID]'s Pet Hunt]
$description[1;Your pet found you: 2 **$randomText[fox;deer;moose;rabbit]**!]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$if[$getGlobalUserVar[BoughtBait;$authorID]==False]
$setGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$sum[$getGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$authorID];2];$authorID]
$else
$setGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$sum[$getGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$authorID];4];$authorID]
$footer[1;Bait active. Double the animals. (4)]
$endif
$wait[10m]
$channelSendMessage[$channelID;$username[$authorID]: Your pet has begun hunting for you. Come back in 10m to claim its findings.]
$onlyIf[$getGlobalUserVar[HasPet;$authorID]!=False;<:alert:977143489697558569> You don't have a pet. \`You need to buy one from $getServerVar[Prefix;$serverID]petshop\`]

$globalCooldown[15m;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`pethunt\` again in **%min%m %sec%s**.}
{color:#ff2050}}]
`
}