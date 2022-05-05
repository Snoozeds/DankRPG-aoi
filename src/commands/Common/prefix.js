module.exports = {
name: "prefix",
code: `
$setServerVar[Prefix;$message;$guildID]
Changed prefix to \`$noEscapingMessage\`
$suppressErrors
$onlyPerms[manageserver;This server's prefix is $getServerVar[Prefix;$guildID]\n**(You can't change this because you don't have the "manage server" permission)**]
$onlyIf[$isBot[$authorID]!=true;]
$onlyIf[$message!=;You need to provide a proper prefix.]
`
}
