module.exports = {
name: "whois",
aliases: ["wi", "ui", "userinfo"],
code: `
$description[1;
\`$username[$findUser[$message;yes]]#$discriminator[$findUser[$message;yes]]\`
**Highest Role:** <@&$highestRole[$findUser[$message;yes]]>
**Joined Discord:** <t:$truncate[$divide[$creationDate[$findUser[$message[1]];$guildID;ms];1000]]:R>
**Joined Server:** <t:$truncate[$divide[$memberJoinedDate[$findUser[$message[1]];$guildID;ms];1000]]:R>
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$onlyIf[$isBot[$authorID]!=true;]
`
}