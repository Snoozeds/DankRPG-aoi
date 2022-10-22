module.exports = {
name: "addcoins",
aliases: ["add coins"],
category: "Admin",
description: "Add coins to a user.",
usage: "<user> <amount>",
code: `
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$findUser[$message[1];no]];$message[2]];$findUser[$message[1];no]]
Gave $getVar[Coi]$message[2] to **$userTag[$findUser[$message[1];no]]**.
$onlyIf[$userExists[$findUser[$message[1];no]]!=false;<:alert:977143489697558569> The user you are trying to add coins to doesn't exist!\n\`$getServerVar[Prefix;$guildID]addcoins <user> <amount>\`]
$onlyIf[$isNumber[$message[2]]!=false;<:alert:977143489697558569> The second parameter for addcoins is invalid! Must be a number.\n\`$getServerVar[Prefix;$guildID]addcoins <user> <amount>\`]
$onlyIf[$message!=;<:alert:977143489697558569> You are missing parameters!\n\`$getServerVar[Prefix;$guildID]addcoins <user> <amount>\`]
$onlyPerms[$getServerVar[Permissions;$guildID];Sorry, you cannot use this command as you don't have the \`$getServerVar[Permissions;$guildID]\` permission.]
`
} 

/* Messing this command up can cause unexpected behavior.
(e.g adding a number too high, negative coins.)
Use at your own risk.

Usage: d!addcoins <user> <amount>
*/