module.exports = {
name: "commands",
aliases: ["help", "cmds"],
code: `
$title[1;Commands]
$color[1;$getGlobalUserVar[EmbedColor]]
$description[1;
**Economy Commands**:
\`daily, fight, farm, forage, slots, startdungeon, mine, give, sellall, vote\`

**Social Commands**:
\`hug, kill, slap, wave, marry, marriage, divorce\`

**Fun Commands**:
\`repeat, 8ball, coinflip\`

**Misc Commands**:
\`commands, ping, info, serverinfo, feedback, credits, whois, avatar\`

**Stat Commands:**
\`inventory, achievements\`

**Shop Commands**:
\`shop, petshop, buypet, abandon, petinfo, heal, upgrade\`

**Settings**:
\`settings, prefix, changecolor, familymode, interactions\`
 
**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Docs](https://docs.dankrpg.xyz) | [Source Code](https://github.com/SnoozedsGithub/DankRPG) | [Support Server](https://discord.gg/Cc3xBSpWeB)
$suppressErrors
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$onlyIf[$isBot[$authorID]!=true;]
`
}
