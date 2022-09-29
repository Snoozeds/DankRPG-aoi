module.exports = {
name: "8ball",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[
;
{newEmbed:
{title:You ask the magic 8ball...}
{description:
Question: $message
Answer: $httpRequest[https://apiv1.snoozeds.repl.co/8ball/$message;GET;;response]}
{thumbnail:https://assets.dankrpg.xyz/Images/8ball.png}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
}
`
}