module.exports = {
name: "$alwaysExecute",
noprefix: true,
code: `
$onlyIf[$authorID!=855479925863481345;]
$onlyForIDs[922909400941867128;]
$onlyForChannels[950360118153871410;]
$onlyForServers[856149002734403615;]
$onlyForRoles[950359239916933133;]

Sending vote rewards to $message[>]....
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$message];1];$message]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$message];100];$message]
$suppressErrors`
}

/* To explain this in the shortest way I can:

- I have one instance of a bot running discord.js (named 'Voting'), and accepting a webhook from top.gg. The webhook gets sent from top.gg whenever a user votes, returning their UserID. This is then sent in a channel only viewable by me
(unfortunately you'll have to take my word that I won't do anything with a userID. I mean, it's just a UserID, right?).
You can view the source code of that bot here: https://replit.com/@Snoozeds/TopGG-Voting?v=1

- I then have this bot (Dank RPG - Running AOI.JS) look in that channel. When a message is sent in that channel (this message will always be a userID), it sees that message and uses it in this code here.

- I also now have Dank RPG listen to other bots... but only in this command. Every other command now has a function that ignores messages sent by bots ('$onlyIf[$isBot[$authorID]!=true;]')
(this is a requirement to get accepted by top.gg in the first place, and bots listening to other bots is annoying. This isn't a public command, so listening to other bots should be fine.)

Yes. This is an extremely weird way to do it that's hard to explain. It took me a while to figure out a good way to do this with AOI and it's limitations. Even more weird because I have to make sure that this is all open-source ;)

You can view top.gg's docs on their webhook here:
https://docs.top.gg/libraries/javascript/

If you think that all of this is an issue (me potentially seeing your discord ID), simply don't vote. It won't be logged then.

*/
