module.exports = {
name: "hug",
$if: "v4",
prototype: "slash",
type: "interaction",
code: `
$if[$findUser[$interactionData[options.data[0].value]]==$authorID]
$interactionReply[;
{newEmbed:
{title:Dank RPG hugs $username[$authorID]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
{image:$getObjectProperty[url]}}]
$else
$interactionReply[$username[$authorID] hugs <@$findUser[$interactionData[options.data[0].value]]>;
{newEmbed:
{color:#303136}
{image:$getObjectProperty[url]}}]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$interactionData[options.data[0].value]]]!=False;{
"content": "This user has interactions disabled.","ephemeral": true,"options": {"interaction": true}}]
$endif
$createObject[$jsonRequest[https://api.dankrpg.xyz/anime/hug]]`
}