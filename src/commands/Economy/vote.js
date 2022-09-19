module.exports = {
name: "vote",
code: `
$author[Voting for DankRPG]
$description[1;
Voting rewards are automatic. You can vote every 12 hours.
\n**Rewards for voting:\n$getVar[Coi]500\n $getVar[MegaCoi]1**]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$addButton[1;Vote (top.gg);link;https://top.gg/bot/855479925863481345/vote;no]

$globalCooldown[30s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`vote\` again in **%sec%s**.}
{color:#ff2050}}]
`
}