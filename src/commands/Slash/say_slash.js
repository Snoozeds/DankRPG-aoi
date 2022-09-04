module.exports = {
name: "say",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[**$username[$authorID]** says: \n$interactionData[options.data[0].value]]

$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
}