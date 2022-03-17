module.exports = {
name: "repeat",
code: `$title[1;Repeated message from $username[$authorID]:]
$description[1;\`$message\`]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$addTimestamp[1]
$globalCooldown[15s;I will not spam your messages. **%time%** left.]
$onlyIf[$isBot[$authorID]!=true;]`
}