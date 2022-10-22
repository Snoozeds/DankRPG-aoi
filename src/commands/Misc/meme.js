module.exports = {
name : "meme",
aliases: "memes",
code : `
$title[1;$getObjectProperty[title]]
$image[1;$getObjectProperty[url]]
$description[1;[Source]($getObjectProperty[postLink])]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$footer[1;$getObjectProperty[ups] upvotes. | u/$getObjectProperty[author]]

$createObject[$jsonRequest[https://meme-api.herokuapp.com/gimme]]

$globalCooldown[3s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`meme\` again in **%sec%s**.}
{color:#ff2050}}]
`};