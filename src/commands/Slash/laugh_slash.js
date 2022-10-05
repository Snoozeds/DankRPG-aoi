module.exports = {
name: "laugh",
prototype: "slash",
type: "interaction",
code: `
$interactionReply[;
{newEmbed:
{title:Laugh}
{description:<@$authorID> laughs!}
{image:$getObjectProperty[url]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}}]

$createObject[$jsonRequest[https://api.dankrpg.xyz/anime/laugh]]

$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]`
}