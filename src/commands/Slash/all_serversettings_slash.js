module.exports = [{
name: "serversettings",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[
;
{newEmbed:
{title:Server Settings}
{description:Here are all the settings you can change.

**Prefix** - This will change the prefix for the server.
</changeprefix:1014696088948707470> \`prefix\`
Your value: $getServerVar[Prefix;$guildID]

**Permissions (Owner Only)** - Changes required perms for admin commands.
</permissions:1014696867436691547> \`manageserver/admin\`
Your value: $getServerVar[Permissions;$guildID]}
{footer:Tip! You can click on the highlighted slash text to quickly change the setting.}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
}
]

$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
},

{
name: "changeprefix",
prototype: "slash",
type: "interaction",
$if: "v4",
code:`
$if[$hasPerms[$guildID;$authorID;$getServerVar[Permissions;$guildID]]==false]
$interactionReply[You do not have the correct permission (\`$getServerVar[Permissions;$guildID]\`) to change the prefix.]
$else
$if[$charCount[$interactionData[options.data[0].value]]>8]
$interactionReply[\`$interactionData[options.data[0].value]\` is longer than 8 characters. Please try to keep your prefix short. Thanks]
$else
$setServerVar[Prefix;$interactionData[options.data[0].value];$guildID]
$interactionReply[Changed prefix to \`$interactionData[options.data[0].value]\`.]
$endif
$endif

$globalCooldown[15s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
},

{
name: "permissions",
prototype: "slash",
type: "interaction",
$if: "v4",
code:`
$if[$authorID!=$ownerID[$guildID]]
$interactionReply[Sorry, only the server owner can change permissions for security reasons.]
$else
$if[$interactionData[options.data[0].value]==manageserver]
$setServerVar[Permissions;manageserver;$guildID]
$interactionReply[Changed permissions to \`$interactionData[options.data[0].value]\`]
$else
$if[$interactionData[options.data[0].value]==admin]
$setServerVar[Permissions;admin;$guildID]
$interactionReply[Changed permissions to \`$interactionData[options.data[0].value]\`]
$else
$interactionReply[Please provide a proper argument. Either 'admin' or 'manageserver'.\n(Your current permission is: \`$getServerVar[Permissions;$guildID]\`)]
$endif
$endif
$endif

$globalCooldown[15s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
}
]