module.exports = {
name: "forage",
aliases: ["explore", "search"],
code: `$description[1;<@$authorID> goes foraging. They find: $randomText[Wood;Stone;Slime] (**$random[1;3]**)]
$setGlobalUserVar[$randomText[Wood;Stone;Slime];$sum[$getGlobalUserVar[$randomText[Wood;Stone;Slime]];$random[1;3]];$authorID]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;Please wait **%time%**]
$onlyIf[$isBot[$authorID]!=true;]
`
}
