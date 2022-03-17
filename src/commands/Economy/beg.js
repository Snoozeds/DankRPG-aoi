module.exports = {
name: "beg",
code: `
You earned <:RPGCoin:855767372534906920>$random[15;20] from begging. You also lost <:RPGHeart:855755205102534686>$random[1;5].
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[15;20]];$authorID]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP];$random[1;5]];$authorID]
$globalCooldown[20s;Stop begging so much. (**%time%** left)]
$suppressErrors
$onlyIf[$random[1;2]==1;No one gave you anything.]
$onlyIf[$isBot[$authorID]!=true;]
`
}
