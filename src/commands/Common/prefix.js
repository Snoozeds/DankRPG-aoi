module.exports = {
    name: "prefix",
    code: `
    $if[$message==]
    You need to provide a proper prefix.
    $else
    $setServerVar[Prefix;$message;$guildID]
		Changed prefix to \`$noEscapingMessage\`
		$onlyPerms[manageserver;:x: You do not have the manage guild permission.]
		$endif
		$suppressErrors
    `
}
