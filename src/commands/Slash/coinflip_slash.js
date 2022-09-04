module.exports = {
name: "coinflip",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[It landed on **$randomText[heads;tails]**!
]

$globalCooldown[5s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
}