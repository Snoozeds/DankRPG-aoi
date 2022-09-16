module.exports = {
name: "coinflip",
aliases: ["cf", "fc", "flip", "flipcoin"],
code: `
Flipping a coin $editIn[350ms;Flipping a coin.;Flipping a coin..;Flipping a coin...;It landed on **$randomText[heads;tails]**!]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`coinflip\` again in **%sec%s**.}
{color:#ff2050}}]`
}