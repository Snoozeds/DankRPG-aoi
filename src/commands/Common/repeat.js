module.exports = {
    name: "repeat",
    code: `$title[Repeated message from $username[$authorID]:]
    $description[\`$message\`]
    $color[$getGlobalUserVar[EmbedColor;$authorID]]
    $addTimestamp
    $globalCooldown[15s;I will not spam your messages. **%time%** left.]
    $onlyIf[$isBot[$authorID]!=true;]`
}