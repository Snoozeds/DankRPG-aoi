module.exports = {
    name: "commands",
    aliases: ["help", "cmds"],
    code: `
$title[Commands]
$color[$getGlobalUserVar[EmbedColor]]
$description[
**Economy Commands**:
\`daily, fight, farm, bwork, forage\`

**Interactions Commands**:
\`hug, kill\`

**Fun Commands**:
\`repeat, 8ball\`

**Misc Commands**:
\`commands, ping, info, feedback, credits\`

**Settings**:
\`prefix, changecolor, familymode, interactions\`

**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Support](https://discord.gg/Cc3xBSpWeB) | [Docs](https://docs.dankrpg.xyz) | [Source Code](https://github.com/SnoozedsGithub/DankRPG)]
$suppressErrors
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
    



    
    `
}
