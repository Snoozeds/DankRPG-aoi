module.exports = {
name: "update",
aliases: ["refresh", "refreshcommands", "updatecommands"],
code: `$onlyForIDs[$getVar[ownid];]
$channelSendMessage[$channelID;Updated commands.]
$updateCommands
$onlyIf[$isBot[$authorID]!=true;]`
} // This will NOT add new variables. It only refreshes each command file changed.