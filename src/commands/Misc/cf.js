module.exports = {
name: "coinflip",
aliases: ["cf", "fc", "flip", "flipcoin"],
category: "Misc",
description: "Flips a coin.",
usage: "N/A",
code: `
Your coin landed on **$randomText[heads;tails]**!

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`coinflip\` again in **%sec%s**.}
{color:#ff2050}}]`
}