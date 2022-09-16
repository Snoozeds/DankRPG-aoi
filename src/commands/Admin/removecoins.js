module.exports = {
name: "removecoins",
aliases: ["remove coins"],
code: `
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$findUser[$message[1];no]];$message[2]];$findUser[$message[1];no]]
Removed $getVar[Coi]$message[2] from **$userTag[$findUser[$message[1];no]]**.
$onlyIf[$userExists[$findUser[$message[1];no]]!=false;<:alert:977143489697558569> The user you are trying to remove coins from doesn't exist!\n\`$getServerVar[Prefix;$guildID]removecoins <user> <amount>\`]
$onlyIf[$isNumber[$message[2]]!=false;<:alert:977143489697558569> The second parameter for removecoins is invalid! Must be a number.\n\`$getServerVar[Prefix;$guildID]removecoins <user> <amount>\`]
$onlyIf[$message!=;<:alert:977143489697558569> You are missing parameters!\n\`$getServerVar[Prefix;$guildID]removecoins <user> <amount>\`]
$onlyPerms[$getServerVar[Permissions;$guildID];Sorry, you cannot use this command as you don't have the \`$getServerVar[Permissions;$guildID]\` permission.]
`
} 

/* Messing this command up can cause unexpected behavior.
(e.g subtracting a number too high, negative coins.)
Use at your own risk.

Usage: d!removecoins <user> <amount>
*/