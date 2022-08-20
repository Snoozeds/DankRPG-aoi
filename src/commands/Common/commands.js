module.exports = {
name: "commands",
aliases: ["help", "cmds", "cmd"],
code: `
$title[1;Commands]
$color[1;$getGlobalUserVar[EmbedColor]]
$description[1;
**Economy Commands**:
\`daily, fight, farm, forage, slots, dungeon, mine,
give, sellall, pethunt, hunt, blackjack, gamble, inventory\`

**Social Commands**:
\`hug, kill, slap, wave, laugh, marry, marriage\`

**Fun Commands**:
\`repeat, 8ball, coinflip, neko, meme\`

**Misc Commands**:
\`settings, ping, info, serverinfo, userinfo,
credits, avatar, banner, privacy, achievements\`

**Shop Commands**:
\`shop, petshop, buypet, petinfo, petupgrade,
heal, upgrade, sellall, sell<item>\`

**Admin Commands**:
\`serversettings, addcoins, removecoins\`
 
**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Docs](https://docs.dankrpg.xyz) | [Source Code](https://github.com/SnoozedsGithub/DankRPG) | [Support Server](https://discord.gg/Cc3xBSpWeB)]
$footer[1;Command Count: $commandsCount]
$suppressErrors
$globalCooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
`
}