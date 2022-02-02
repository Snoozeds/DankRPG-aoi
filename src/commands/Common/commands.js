module.exports = {
name: "commands",
aliases: ["help", "cmds"],
code: `
$title[Commands]
$color[$getGlobalUserVar[EmbedColor]]
$description[
**Economy Commands**:
\`daily, weekly, fight, farm, bwork, forage, slots, startdungeon, mine, give\`

**Interactions Commands**:
\`hug, kill\`

**Fun Commands**:
\`repeat, 8ball, coinflip\`

**Misc Commands**:
\`commands, ping, info, serverinfo, feedback, credits, inventory, whois, sellall\`

**Shop Commands**:
\`petshop, buypet, abandon, petinfo, heal, upgrade\`

**Settings**:
\`settings, prefix, changecolor, familymode, interactions\`

**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Docs](https://docs.dankrpg.xyz) | [Source Code](https://github.com/SnoozedsGithub/DankRPG) | [Donate](https://dankrpg.xyz/donate)]
$suppressErrors
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
    `
}
