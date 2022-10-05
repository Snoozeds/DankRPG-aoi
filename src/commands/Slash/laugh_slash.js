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

$createObject[$jsonRequest[https://api.dankrpg.xyz/anime/laugh]]`
}