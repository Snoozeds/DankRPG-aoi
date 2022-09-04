module.exports = {
name: "commands",
prototype: "slash",
type: "interaction",
code: `
$interactionReply[
;
{newEmbed:
{title:Commands}
{description:
**Economy Commands**:
\`profile, daily, fight, farm, forage, slots, dungeon, mine,
give, sellall, pethunt, hunt, blackjack, gamble, inventory\`

**Social Commands**:
\`hug, kill, slap, wave, laugh, marry, marriage\`

**Fun Commands**:
\`repeat, 8ball, coinflip, neko, meme\`

**Misc Commands**:
\`settings, ping, info, serverinfo, userinfo,
credits, avatar, banner, achievements\`

**Shop Commands**:
\`shop, petshop, buypet, petinfo, petupgrade,
heal, upgrade, sellall, sell<item>\`

**Admin Commands**:
\`serversettings, addcoins, removecoins\`

**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Docs](https://dankrpg.xyz/docs/Intro/welcome) | [Source Code](https://github.com/SnoozedsGithub/DankRPG) | [Support Server](https://discord.gg/Cc3xBSpWeB)}
{footer:$commandsCount commands}
{color:$getGlobalUserVar[EmbedColor]}
}
]
$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]
`
}