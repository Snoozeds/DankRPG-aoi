module.exports = {
name: "prefix",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[Hello! my prefix for this server is: \`$getServerVar[Prefix;$guildID]\`
You can also ping me instead of using a prefix.]

$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
}