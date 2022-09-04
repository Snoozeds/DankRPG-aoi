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
`
}