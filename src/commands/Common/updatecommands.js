module.exports = {
name: "update",
aliases: "refresh",
code: `$onlyForIDs[$botOwnerID[;];]
$updateCommands
$description[Commands have been updated! 😀]
$color[$getGlobalUserVar[EmbedColor;$authorID]]`
}