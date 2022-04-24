module.exports = {
name: "pethunt",
aliases: ["pet hunt", "petshunt", "pets hunt"],
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
$footer[1;Bait active. Double the animals.]
$endif
$wait[10m]
$channelSendMessage[$channelID;$username[$authorID]: Your pet has begun hunting for you. Come back in 10m to claim its findings.]
$globalCooldown[15m;Your pet has already been hunting recently. Please wait **%time%**.]
$onlyIf[$getGlobalUserVar[HasPet;$authorID]!=False;You don't have a pet.]
`
}