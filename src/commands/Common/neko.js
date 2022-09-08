module.exports = {
name: "neko",
code: `
$title[1;🐱]
$image[1;$getObjectProperty[output.url]]
$description[1;[Source]($getObjectProperty[output.source]) | [Artist]($getObjectProperty[output.artist])
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$footer[1;api: nekos.rest]
$globalCooldown[5s;Chillax. Wait before requesting again. %time%]

$createObject[$jsonRequest[https://nekos.rest/api/neko]]
`
}

