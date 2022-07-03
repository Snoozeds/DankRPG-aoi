module.exports = {
name: "dev removecoins",
aliases: ["dev remove coins", "devremovecoins", "devremove coins", "removecoins", "remove coins"],
code: `
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$findUser[$message[1];no]];$message[2]];$findUser[$message[1];no]]
Gave $message[2] coins to <@$findUser[$message[1];no]>.
$onlyIf[$userExists[$findUser[$message[1];no]]!=false;<:alert:977143489697558569> The user you are trying to remove coins from doesn't exist!\n\`$getServerVar[Prefix;$guildID]dev removecoins <user> <amount>\`]
$onlyIf[$isNumber[$message[2]]!=false;<:alert:977143489697558569> The second parameter for removecoins is invalid! Must be a number.\n\`$getServerVar[Prefix;$guildID]dev removecoins <user> <amount>\`]
$onlyForIDs[$getVar[ownid];]
`
} 

/* Messing this command up can cause unexpected behavior.
(e.g subtracting a number too high, negative coins.)
Use at your own risk.

Usage: d!dev removecoins <user> <amount>
*/