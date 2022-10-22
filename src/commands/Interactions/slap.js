module.exports = {
name: "slap",
$if: "v4",
category: "Social",
description: "Slaps someone.",
usage: "<user>",
code: `
$if[$findUser[$message;no]==$authorID]
$title[1;Dank RPG slaps $username[$authorID]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$httpRequest[https://api.dankrpg.xyz/anime/slap;GET;;url]]
$else

$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has social commands disabled from their settings.]

$title[1;$username[$authorID] slaps $username[$findUser[$message;no]]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$httpRequest[https://api.dankrpg.xyz/anime/slap;GET;;url]]
$endif
$onlyIf[$message!=;Mention someone.]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`slap\` again in **%sec%s**.}
{color:#ff2050}}]
`
}
