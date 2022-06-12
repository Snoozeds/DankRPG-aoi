module.exports = {
name: "coinflip",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[It landed on **$randomText[heads;tails]**!]
$globalCooldown[5s;Please wait. %time%]
`
}