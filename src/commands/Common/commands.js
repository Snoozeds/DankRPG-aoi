module.exports = {
name: "commands",
aliases: ["help", "cmds", "cmd"],
code: `
$title[1;Commands]
$color[1;$getGlobalUserVar[EmbedColor]]
$description[1;
**Economy Commands**:
\`profile, daily, fight, farm, forage, slots, dungeon, mine,
give, vote, pethunt, hunt, blackjack, gamble, inventory\`

**Social Commands**:
\`hug, kill, slap, wave, laugh, marry, marriage\`

**Fun Commands**:
\`repeat, 8ball, coinflip, neko, meme\`

**Misc Commands**:
\`settings, ping, info, serverinfo, userinfo,
credits, avatar, banner, achievements\`

**Shop Commands**:
\`shop, petshop, buypet, petinfo, petupgrade,
heal, upgrade, sellall, sell<item>, iteminfo\`

**Admin Commands**:
\`serversettings, addcoins, removecoins\`
 
**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Docs](https://dankrpg.xyz/docs/Intro/welcome) | [Source Code](https://github.com/SnoozedsGithub/DankRPG) | [Support Server](https://discord.gg/Cc3xBSpWeB)]
$footer[1;Command Count: $commandsCount | Server prefix: $getServerVar[Prefix;$guildID]]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`commands\` again in **%sec%s**.}
{color:#ff2050}}]
`
}