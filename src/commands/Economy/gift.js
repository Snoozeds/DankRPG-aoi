module.exports = {
name: "gift",
aliases: "give",
category: "Economy",
description: "Gives coins to another user.",
usage: "<user> <amount>",
code: `
$description[1;You gifted $getVar[Coi]$message[2] to <@$findUser[$message[1];no]>.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$footer[1;Gift from $username[$authorID]]

$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$message[2]];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$findUser[$message[1];no]];$message[2]];$findUser[$message[1];no]]

$onlyIf[$findUser[$message[1];no]!=$authorID;You cannot give coins to yourself.]
$onlyIf[$message!=;**Usage**: \`$getServerVar[Prefix]give <@username> <amount>\` (error: no user mentioned, no amount mentioned)]
$onlyIf[$isNumber[$message[2]]!=false;**Usage**: \`$getServerVar[Prefix]give <@username> <amount>\` (error: not a number)]
$onlyIf[$checkContains[$message[2];-]!=true;No negative values allowed.]
$onlyIf[$message[2]<=$getGlobalUserVar[Coins;$authorID];You don't have this much.]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`give\` again in **%sec%s**.}
{color:#ff2050}}]
`
}