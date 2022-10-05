module.exports = {
name: "wave",
prototype: "slash",
type: "interaction",
code: `
$interactionReply[;
{newEmbed:
{title:Wave}
{description:<@$authorID> waves.}
{image:$getObjectProperty[url]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
}
]

$createObject[$jsonRequest[https://api.dankrpg.xyz/anime/wave]]`
}