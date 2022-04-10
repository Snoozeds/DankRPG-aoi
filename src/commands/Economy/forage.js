module.exports = {
name: "forage",
aliases: ["explore", "search"],
code: `$description[1;<@$authorID> goes foraging. They find: $randomText[Wood;Stone;Slime] (**$random[15;20]**)]
$setGlobalUserVar[$randomText[Wood;Stone;Slime];$sum[$getGlobalUserVar[$randomText[Wood;Stone;Slime]];$random[15;20]];$authorID]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;Please wait **%time%**]
$onlyIf[$isBot[$authorID]!=true;]
`
}
