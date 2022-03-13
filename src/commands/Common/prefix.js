module.exports = {
    name: "prefix",
    code: `
    $if[$message==]
    You need to provide a proper prefix.
    $else
    $setServerVar[Prefix;$message;$guildID]
		Changed prefix to \`$noEscapingMessage\`
		$endif
		$suppressErrors
    $onlyPerms[manageserver;This server's prefix is $getServerVar[Prefix;$guildID]\n**(You can't change this because you don't have the "manage server" permission)**]
    $onlyIf[$isBot[$authorID]!=true;]
    `
}
