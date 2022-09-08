module.exports = {
name: "neko",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[
;    
{newEmbed:
{title:🐱}
{description:[Source]($httpRequest[https://nekos.rest/api/neko;GET;;source]) | [Artist]($httpRequest[https://nekos.rest/api/neko;GET;;artist])}
{image:$httpRequest[https://nekos.rest/api/neko;GET;;url]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
{footer:nekos.rest}
}

]
$globalCooldown[5s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
}