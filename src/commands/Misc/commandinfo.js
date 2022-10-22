module.exports = {
name: "commandinfo",
aliases: ["cmdinfo", "cmdi", "command info", "cmd info", "cmd i"],
category: "Misc",
description: "Shows information about a command.",
usage: "(command)",
code: `
$title[1;Command Info]
$description[1;$replaceText[$replaceText[$checkCondition[$commandInfo[$message;name]==];true;Command not found!\nMake sure that you typed the command correctly.;1];false;
**Name**: $commandInfo[$message;name]
**Aliases**: $replaceText[$replaceText[$checkCondition[$commandInfo[$message;aliases]==];true;**N/A**;1];false;$joinSplitText[, ]
$textSplit[$commandInfo[$message;aliases];,];1]
;1]]
**Category:** $commandInfo[$message;category]
**Description:** $commandInfo[$message;description]
**Usage:** $commandInfo[$message;usage]
$color[1;$getGlobalUserVar[EmbedColor]]

$globalCooldown[5s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`commandinfo\` again in **%sec%s**.}
{color:#ff2050}}]
`
}