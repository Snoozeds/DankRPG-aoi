module.exports = {
name: "coinflip",
aliases: ["cf", "fc", "flip", "flipcoin"],
code: `
Flipping a coin $editIn[350ms;Flipping a coin.;Flipping a coin..;Flipping a coin...;It landed on **$randomText[heads;tails]**!]

$if[$authorID!=$getVar[ownid]]
$globalCooldown[10s;Please wait %time%.]
$endif`
}