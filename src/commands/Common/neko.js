module.exports = {
name: "neko",
code: `
$title[1;🐱]
$image[1;$httpRequest[https://api.nekos.rest/neko;GET;;url]]
$description[1;[Source]($httpRequest[https://api.nekos.rest/neko;GET;;source]) | [Artist]($httpRequest[https://api.nekos.rest/neko;GET;;artist])
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$footer[1;api: nekos.rest]
$globalCooldown[5s;Chillax. Wait **%time%** before requesting again.]
`
}