module.exports = {
name: "update",
$if: "v4",
aliases: ["refresh", "refreshcommands", "updatecommands"],
code: `
$if[$authorID==$getVar[ownid]]
$channelSendMessage[$channelID;Updated commands.]
$updateCommands
$else
$endif`
} // This will NOT add new variables. It only refreshes each command file changed.