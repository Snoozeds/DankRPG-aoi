module.exports = {
    name : "8ball",
    code: `
    $if[$message==]
    Usage: $getServerVar[Prefix]8ball <question>
    $else
    $title[You ask the magic 8ball...]
    $description[$addField[Answer:;$httpRequest[https://apiv1.snoozeds.repl.co/8ball/$message;GET;;response;Failed to grab answer.]]$addField[Question:;$message]]
    $thumbnail[https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/120/mozilla/36/billiards_1f3b1.png]
    $addTimestamp
    $color[$getGlobalUserVar[EmbedColor;$authorID]]
    $endif
    $globalCooldown[10s;Please wait **%time%**.]
    `
}
