module.exports = {
name: "hunt",
aliases: ["hunting", "h"],
category: "Economy",
description: "Hunt for animals.",
usage: "N/A",
$if: "v4",
code: `
$if[$getGlobalUserVar[HP;$authorID]<=30]
You die because you have run out of HP.
$setGlobalUserVar[HP;100;$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$endif

$if[$randomText[Animal;Animal;Animal;hpLoss]==hpLoss]
$title[1;Hunting]
$description[1;You go hunting.\nThe animal attacks you! You lose $getVar[Heart]$random[25;30].\nYou now have $getVar[Heart]**$getGlobalUserVar[HP;$authorID]/$getGlobalUserVar[MaxHP;$authorID]**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP;$authorID];$random[25;30]];$authorID]

$else
$title[1;Hunting]
$description[1;You go hunting.\nYou find: a **$randomText[fox;deer;moose;rabbit]**!]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$if[$getGlobalUserVar[BoughtBait;$authorID]==False]
$setGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$sum[$getGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$authorID];1];$authorID]
$else
$setGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$sum[$getGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$authorID];2];$authorID]
$footer[1;Bait active. Double the animals (2).]
$endif
$endif

$globalCooldown[20s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`hunt\` again in **%sec%s**.}
{color:#ff2050}}]`
}