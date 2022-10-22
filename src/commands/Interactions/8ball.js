module.exports = {
name : "8ball",
$if: "v4",
category: "Fun",
description: "Ask the magic 8ball a question.",
usage: "<question>",
code: `
$if[$message==]
Usage: $getServerVar[Prefix]8ball <question>
$else
$title[1;You ask the magic 8ball...]
$description[1;$addField[1;Answer:;$httpRequest[https://apiv1.snoozeds.repl.co/8ball/$message;GET;;response;Failed to grab answer.]]$addField[1;Question:;$message]]
$thumbnail[1;https://assets.dankrpg.xyz/Images/8ball.png]
$addTimestamp[1;]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$endif

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`8ball\` again in **%sec%s**.}
{color:#ff2050}}]
`
}
