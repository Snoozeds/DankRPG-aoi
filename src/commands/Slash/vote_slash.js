module.exports = {
name: "vote",
prototype: "slash",
type: "interaction",
code: `
$interactionReply[;
{newEmbed:
{title:Voting for DankRPG}
{description:
Voting rewards are automatic. You can vote every 12 hours.
You have voted **$getGlobalUserVar[VoteCount;$authorID]** times.
\n**Rewards for voting:**\n**$getVar[Coi]500** \`Coins\`\n**$getVar[MegaCoi]1** \`MegaCoins\`\n**<:hppotion:1022298361702920353>1** \`HP Potion ($getServerVar[Prefix;$guildID]usehp)\`
\n:arrow_right: [Vote (top.gg)](https://top.gg/bot/852202010000578560/vote)
}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
{thumbnail:$userAvatar[$clientID]}}]

$globalCooldown[30s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
}