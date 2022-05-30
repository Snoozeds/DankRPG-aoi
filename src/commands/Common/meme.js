module.exports = {
name : "meme",
aliases: "memes",
code : `
$title[1;$jsonRequest[https://meme-api.herokuapp.com/gimme;title]]
$image[1;$jsonRequest[https://meme-api.herokuapp.com/gimme;url]]
$description[1;[Source]($jsonRequest[https://meme-api.herokuapp.com/gimme;postLink])]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$footer[1;$jsonRequest[https://meme-api.herokuapp.com/gimme;ups] upvotes.]
$globalCooldown[3s;Please slow down. %time%]
`};