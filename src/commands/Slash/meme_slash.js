module.exports = {
name: "meme",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[
;    
{newEmbed:
    {title:$jsonRequest[https://meme-api.herokuapp.com/gimme;title]}
    {description:[Source]($jsonRequest[https://meme-api.herokuapp.com/gimme;postLink])}
    {image:$jsonRequest[https://meme-api.herokuapp.com/gimme;url]}
    {color:$getGlobalUserVar[EmbedColor]}
    {footer:$jsonRequest[https://meme-api.herokuapp.com/gimme;ups] upvotes.}
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