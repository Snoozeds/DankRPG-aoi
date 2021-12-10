module.exports = {
    name: "commands",
    aliases: ["help", "cmds"],
    code: `
		$if[$checkContains[$userPerms;Manage Guild]==]
		$title[Commands: Guild Manager]
		$color[$getGlobalUserVar[EmbedColor]]
		 $description[**__Misc__**
\`commands\`, \`ping\`, \`settings\`, \`feedback\`, \`credits\`, \`repeat\`\n
**__Economy__**
\`beg\`, \`daily\`, \`heal\`, \`fight\`, \`work\`, \`upgrade\`, \`shop\`, \`farm\`, \`bs\`, \`bwork\`\n
**__Stats__**
\`info\`, \`profile\`, \`hp\`, \`achievements\`, \`whois\`, \`serverinfo\` \n
**__Interactions__**
\`hug\`, \`kill\`\n
**__Experimental Features__**
**Music:** \`play\`, \`skip\`, \`stop\`, \`cp\`, \`loopsong\`\n
**__Server Settings__**
\`prefix\`\n\n
**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Support](https://discord.gg/Cc3xBSpWeB) | [Docs](https://docs.dankrpg.xyz) | [Source Code](https://github.com/SnoozedsGithub/DankRPG)]
		$footer[You are seeing this menu because you have the "manage guild" permission.]

		$else
		$title[Commands]
    $color[$getGlobalUserVar[EmbedColor]]
    $description[**__Misc__**
\`commands\`, \`ping\`, \`settings\`, \`feedback\`, \`credits\`, \`repeat\`\n
**__Economy__**
\`beg\`, \`daily\`, \`heal\`, \`fight\`, \`work\`, \`upgrade\`, \`shop\`, \`farm\`, \`bs\`, \`bwork\`\n
**__Stats__**
\`info\`, \`profile\`, \`hp\`, \`achievements\`, \`whois\`, \`serverinfo\`\n
**__Interactions__**
\`hug\`, \`kill\`\n
**__Experimental Features__**
**Music:** \`play\`, \`skip\`, \`stop\`, \`cp\`, \`loopsong\`\n\n
**__Bot Links__**
[Privacy](https://dankrpg.xyz/privacy) | [Support](https://discord.gg/Cc3xBSpWeB) | [Docs](https://docs.dankrpg.xyz) | [Source Code](https://github.com/SnoozedsGithub/DankRPG)]

		$endif
		$suppressErrors
		$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
    



    
    `
}
