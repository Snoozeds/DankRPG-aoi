module.exports = {
name: "neko",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[;
{newEmbed:
{title:🐱}
{image:$getObjectProperty[output.url]}
{description:[Source]($getObjectProperty[output.source]) | [Artist]($getObjectProperty[output.artist])}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
{footer:nekos.rest}
}
$createObject[$jsonRequest[https://nekos.rest/api/neko]]
]
`
}