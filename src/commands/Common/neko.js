module.exports = {
name: "neko",
code: `
$title[1;🐱 | By $getObjectProperty[output.artist_name]]
$image[1;$getObjectProperty[output.url]]
$description[1;[Source]($getObjectProperty[output.source]) | [Artist]($getObjectProperty[output.artist])
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$footer[1;api: nekos.rest]
$createObject[$jsonRequest[https://nekos.rest/api/neko]]

$globalCooldown[3s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`neko\` again in **%sec%s**.}
{color:#ff2050}}]
`
}

