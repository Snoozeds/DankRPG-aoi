module.exports = {
name: "prefix",
code: `
$setServerVar[Prefix;$message;$guildID]
Changed prefix to \`$noEscapingMessage\`
$suppressErrors
$onlyPerms[$getServerVar[Permissions;$guildID];This server's prefix is $getServerVar[Prefix;$guildID]\n(You can't change this because you don't have the  \`$getServerVar[Permissions;$guildID]\` permission)]
$onlyIf[$isBot[$authorID]!=true;]
$onlyIf[$message!=;You need to provide a proper prefix.]
$onlyIf[$charCount[$message]<8;\`$message\` is longer than 8 characters. Please try to keep your prefix short. Thanks]
`
}
