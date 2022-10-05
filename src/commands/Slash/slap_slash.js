module.exports = {
name: "slap",
prototype: "slash",
type: "interaction",
$if: "v4",
code: `
$if[$findUser[$interactionData[options.data[0].value]]==$authorID]
$interactionReply[;
{newEmbed:
{title:Dank RPG slaps $username[$authorID]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
{image:$getObjectProperty[url]}}]
$else
$interactionReply[$username[$authorID] slaps <@$findUser[$interactionData[options.data[0].value]]>;
{newEmbed:
{color:#303136}
{image:$getObjectProperty[url]}}]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$interactionData[options.data[0].value]]]!=False;{
"content": "This user has interactions disabled.","ephemeral": true,"options": {"interaction": true}}]
$endif
$createObject[$jsonRequest[https://api.dankrpg.xyz/anime/slap]]`
}