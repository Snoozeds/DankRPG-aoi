module.exports = {
name: "vote",
code: `
$author[Voting for DankRPG]
$description[1;
Voting rewards are automatic. You can vote every 12 hours.
You have voted **$getGlobalUserVar[VoteCount;$authorID]** times.
\n**Rewards for voting:\n$getVar[Coi]500 \`Coins\`\n$getVar[MegaCoi]1** \`MegaCoins\`\n<:hppotion:1022298361702920353>1 \`HP Potion ($getServerVar[Prefix;$guildID]usehp)\`]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;$userAvatar[$clientID]]
$addButton[1;Vote (top.gg);link;https://top.gg/bot/855479925863481345/vote;no]

$globalCooldown[30s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`vote\` again in **%sec%s**.}
{color:#ff2050}}]
`
}