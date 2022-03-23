module.exports = {
name: "whois",
aliases: "wi",
code: `
$description[1;
\`$username[$findUser[$message;yes]]#$discriminator[$findUser[$message;yes]]\`
:bust_in_silhouette: **Highest Role:** <@&$highestRole[$findUser[$message;yes]]>
<:Arrow_Right_Green:915175740947972097> **Joined Discord:** <t:$truncate[$divide[$creationDate[$findUser[$message[1]];$guildID;ms];1000]]> (<t:$truncate[$divide[$creationDate[$findUser[$message[1]];$guildID;ms];1000]]:R>)
:door: **Joined Server:** <t:$truncate[$divide[$memberJoinedDate[$findUser[$message[1]];$guildID;ms];1000]]> (<t:$truncate[$divide[$memberJoinedDate[$findUser[$message[1]];$guildID;ms];1000]]:R>)
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$onlyIf[$isBot[$authorID]!=true;]
`
}