module.exports = {
name: "laugh",
code: `
$description[1;<@$authorID> laughs!]
$image[1;$httpRequest[https://api.dankrpg.xyz/anime/laugh;GET;;url]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;Please don't spam commands. :)\n(**%time%**)]`
}