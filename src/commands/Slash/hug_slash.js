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
$interactionReply[;
{newEmbed:
{title:$username[$authorID] hug $username[$findUser[$interactionData[options.data[0].value]]]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
{image:$getObjectProperty[url]}}]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$interactionData[options.data[0].value]]]!=False;{
"content": "This user has interactions disabled.","ephemeral": true,"options": {"interaction": true}}]
$endif
$createObject[$jsonRequest[https://api.dankrpg.xyz/anime/hug]]

$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]`
}