module.exports = {
name: "laugh",
category: "Social",
description: "Sends a laughing GIF.",
usage: "N/A",
code: `
$description[1;<@$authorID> laughs!]
$image[1;$httpRequest[https://api.dankrpg.xyz/anime/laugh;GET;;url]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`laugh\` again in **%sec%s**.}
{color:#ff2050}}]`
}