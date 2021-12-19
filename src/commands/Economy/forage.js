module.exports = {
    name: "forage",
    aliases: ["explore", "search", "forage"],
    code: `

    $if[$randomText[1;1;1;2;2;2;3;3;3]==1]
    $description[<@$authorID> goes foraging\nThey find Wood **($random[1;5])**]
    $setGlobalUserVar[Wood;$sum[$getGlobalUserVar[Wood;$authorID];$random[1;5]];$authorID]
    $color[$getGlobalUserVar[EmbedColor]]
    $else

    $if[$randomText[1;1;1;2;2;2;3;3;3]==2]
    $description[<@$authorID> goes foraging\nThey find Stone **($random[1;3])**]
    $setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[1;3]];$authorID]
    $color[$getGlobalUserVar[EmbedColor]]
    $else

    $if[$randomText[1;1;1;2;2;2;3;3;3]==3]
    $description[<@$authorID> goes foraging\nThey find Slime **($random[1;2])**]
    $setGlobalUserVar[Slime;$sum[$getGlobalUserVar[Slime;$authorID];$random[1;2]];$authorID]
    $color[$getGlobalUserVar[EmbedColor]]
    $else

    $endif
    $endif
    $endif
    $globalCooldown[10s;Calm down! There's nothing to forage. (**%time%**)]
    `
}
