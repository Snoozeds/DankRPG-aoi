module.exports = {
name: "repeat",
code: `$title[1;Repeated message from $username[$authorID]:]
$description[1;\`$message\`]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$addTimestamp[1]

$if[$authorID!=$getVar[ownid]]
$globalCooldown[15s;I will not spam your messages. **%time%** left.]
$endif`
}