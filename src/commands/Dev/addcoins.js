module.exports = {
name: "dev addcoins",
aliases: ["dev add coins", "devaddcoins", "devadd coins", "addcoins", "add coins"],
code: `
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$findUser[$message[1];yes]];$message[2]];$findUser[$message[1];yes]]
$onlyIf[$userExists[$findUser[$message[1];yes]]!=false;<:alert:977143489697558569> The user you are trying to add coins to doesn't exist!\n\`$getServerVar[Prefix;$guildID]dev addcoins <user> <amount>\`]
$onlyIf[$isNumber[$message[2]]!=false;<:alert:977143489697558569> The second parameter for addcoins is invalid! Must be a number.\n\`$getServerVar[Prefix;$guildID]dev addcoins <user> <amount>\`]
$onlyForIDs[$botOwnerID[;];]
`
} 

/* Messing this command up can cause unexpected behavior.
(e.g adding a number too high, negative coins.)
Use at your own risk.

Usage: d!dev addcoins <user> <amount>
*/