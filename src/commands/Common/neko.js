module.exports = {
name: "neko",
code: `
$title[1;🐱]
$image[1;$httpRequest[https://nekos.rest/api/neko;GET;;url]]
$description[1;[Source]($httpRequest[https://nekos.rest/api/neko;GET;;source]) | [Artist]($httpRequest[https://nekos.rest/api/neko;GET;;artist])
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$footer[1;api: nekos.rest]
$globalCooldown[5s;Chillax. Wait before requesting again. %time%]
`
}