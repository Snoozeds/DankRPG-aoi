module.exports = {
name : "meme",
aliases: "memes",
code : `
$title[1;$jsonRequest[https://meme-api.herokuapp.com/gimme/memes;title]]
$image[1;$jsonRequest[https://meme-api.herokuapp.com/gimme/memes;url]]
$description[1;[Source]($jsonRequest[https://meme-api.herokuapp.com/gimme/memes;postLink]). \n<:updoot:969165862651170837> **$jsonRequest[https://meme-api.herokuapp.com/gimme/memes;ups]**]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$footer[1;Requested by $username[$authorID].]
$addTimestamp[1]
$globalCooldown[7s;Please slow down. **%time%**.]
`};