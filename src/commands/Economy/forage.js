module.exports = {
    name: "forage",
    aliases: ["explore", "search"],
    code: `
    $if[$randomText[1;1;1;2;2;2;3;3;3;4]==1]
    $description[<@$authorID> goes foraging\nThey find Wood **($random[1;5])**]
    $color[$getGlobalUserVar[EmbedColor]]
    $setGlobalUserVar[Wood;$sum[$getGlobalUserVar[Wood;$authorID];$random[1;5]];$authorID]
    
    $else
    $if[$randomText[1;1;1;2;2;2;3;3;3;4]==2]
    $description[<@$authorID> goes foraging\nThey find Stone **($random[1;3])**]
    $color[$getGlobalUserVar[EmbedColor]]
    $setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[1;3]];$authorID]
    $else

$if[$randomText[1;1;1;2;2;2;3;3;3;4]==3]
    $description[<@$authorID> goes foraging\nThey find Slime **($random[1;2])**]
    $color[$getGlobalUserVar[EmbedColor]]
    $setGlobalUserVar[Slime;$sum[$getGlobalUserVar[Slime;$authorID];$random[1;2]];$authorID]
    $else
    $description[<@$authorID> goes foraging\nThey find Slime **($random[1;2])**]
    $color[$getGlobalUserVar[EmbedColor]]
    $setGlobalUserVar[Slime;$sum[$getGlobalUserVar[Slime;$authorID];$random[1;2]];$authorID]
    $endif
    $endif
    $endif
    $globalCooldown[10s;Calm down! There's nothing to forage. (**%time%**)]
    `
} // For some reason it only works with slime being there twice. Sadge.