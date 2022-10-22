module.exports = {
name: "wave",
category: "Social",
description: "Sends a waving GIF.",
usage: "N/A",
code: `
$description[1;<@$authorID> waves.]
$image[1;$httpRequest[https://api.dankrpg.xyz/anime/wave;GET;;url]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`wave\` again in **%sec%s**.}
{color:#ff2050}}]`
}