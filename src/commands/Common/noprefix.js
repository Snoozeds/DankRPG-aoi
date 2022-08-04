module.exports = {
name: "<@855479925863481345>",
nonPrefixed: "true",
$if: "v4",
code: `
$if[$commandInfo[$message;name]==]
Hello! my prefix for this server is: \`$getServerVar[Prefix;$guildID]\`
You can also ping me instead of using a prefix.
$globalCooldown[5s;]
$else
$endif
`
}