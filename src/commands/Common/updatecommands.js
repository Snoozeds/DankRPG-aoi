module.exports = {
name: "update",
aliases: "refresh",
code: `$onlyForIDs[$botOwnerID[;];]
$updateCommands
$description[Commands have been updated! 😀]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$onlyIf[$isBot[$authorID]!=true;]`
} // This will NOT add new variables. It only refreshes each command file changed.