module.exports = [{
name: "serversettings",
aliases: "serveroptions",
code: `
$title[1;Server Settings]
$description[1;Here are all the settings you can change.
    
**Prefix** - This will change the prefix for the server.
$getServerVar[Prefix]prefix <prefix>
Your value: $getServerVar[Prefix;$guildID]\n

**Permissions (Owner Only)** - Changes required perms for admin commands.
$getServerVar[Prefix]permissions <manageserver/admin>
Your value: $getServerVar[Permissions;$guildID]\n
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
`
},

{
name: "permissions",
alias: ["perms", "permission"],
$if: "v4",
code: `
$if[$message==manageserver]
$setServerVar[Permissions;manageserver;$guildID]
Changed permissions to \`$message\`
$else
$if[$message==admin]
$setServerVar[Permissions;admin;$guildID]
Changed permissions to \`$message\`
$else
Please provide a proper argument. Either 'admin' or 'manageserver'.
(Your current permission is: \`$getServerVar[Permissions;$guildID]\`)
$endif
$endif
$argsCheck[>0;Please provide a proper argument. Either 'admin' or 'manageserver'.\n(Your current permission is: \`$getServerVar[Permissions;$guildID]\`)]
$onlyForIDs[$ownerID[$guildID];Sorry, only the server owner can change permissions for security reasons.]
`
}]