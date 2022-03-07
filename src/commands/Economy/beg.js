module.exports = {
    name: "beg",
    code: `
    $if[$randomText[2;1;1]==1]
    No one gave you anything.

    $else
    You earned <:RPGCoin:855767372534906920>$random[15;20] from begging. You also lost <:RPGHeart:855755205102534686>$random[1;5].
    $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[15;20]];$authorID]
		$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP];$random[1;5]];$authorID]
    $endif
    $globalCooldown[20s;Stop begging so much. (**%time%** left)]
		$suppressErrors
    $onlyIf[$isBot[$authorID]!=true;]
    `
}
