module.exports = {
    name : "8ball",
    $if: "v4",
    code: `
    $if[$message==]
    Usage: $getServerVar[Prefix]8ball <question>
    $else
    $title[1;You ask the magic 8ball...]
    $description[1;$addField[1;Answer:;$httpRequest[https://apiv1.snoozeds.repl.co/8ball/$message;GET;;response;Failed to grab answer.]]$addField[1;Question:;$message]]
    $thumbnail[1;https://assets.dankrpg.xyz/Images/8ball.png]
    $addTimestamp[1;]
    $color[1;$getGlobalUserVar[EmbedColor;$authorID]]
    $globalCooldown[10s;Please wait **%time%**.]
    $endif
    $onlyIf[$isBot[$authorID]!=true;]
    `
}
