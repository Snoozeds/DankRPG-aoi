module.exports = {
name: "commands",
aliases: ["help", "cmds", "cmd"],
code: `
$title[1;Commands]
$color[1;$getGlobalUserVar[EmbedColor]]
$description[1;
**Economy Commands**:
\`daily, fight, farm, forage, slots, dungeon, mine,
give, sellall, pethunt, hunt, blackjack, gamble\`

**Social Commands**:
\`hug, kill, slap, wave, laugh, marry, marriage,
divorce\`

**Fun Commands**:
\`repeat, 8ball, coinflip, neko, meme\`

**Misc Commands**:
\`commands, settings, ping, info, serverinfo, feedback, 
credits, userinfo, avatar, banner, privacy\`

**Stat Commands:**
\`inventory, achievements\`

**Shop Commands**:
\`shop, petshop, buypet, abandon, petinfo, petupgrade, heal, upgrade,
itemlist, sellall, sell<item>\`
 
**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Docs](https://docs.dankrpg.xyz) | [Source Code](https://github.com/SnoozedsGithub/DankRPG) | [Support Server](https://discord.gg/Cc3xBSpWeB)
$footer[1;Command Count: $commandsCount]
$suppressErrors
$globalCooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
`
}