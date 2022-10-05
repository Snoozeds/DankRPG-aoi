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
$interactionReply[;
{newEmbed:
{title:$username[$authorID] slaps $username[$findUser[$interactionData[options.data[0].value]]]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
{image:$getObjectProperty[url]}}]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$interactionData[options.data[0].value]]]!=False;{
"content": "This user has interactions disabled.","ephemeral": true,"options": {"interaction": true}}]
$endif
$createObject[$jsonRequest[https://api.dankrpg.xyz/anime/slap]]

$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]`
}