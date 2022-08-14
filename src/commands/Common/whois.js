module.exports = {
name: "whois",
$if: "v4",
aliases: ["wi", "ui", "userinfo"],
code: `
$if[$getUserBanner[$findUser[$message;yes]]!=null]
$description[1;
\`$userTag[$findUser[$message;yes]] ($findUser[$message;yes])\`\n**Highest Role:** <@&$highestRole[$findUser[$message;yes]]>\n**Joined Discord:** <t:$truncate[$divide[$creationDate[$findUser[$message[1]];$guildID;ms];1000]]:R>\n**Joined Server:** <t:$truncate[$divide[$memberJoinedDate[$findUser[$message[1]];$guildID;ms];1000]]:R>
\nLinks: [Avatar]($userAvatar[$findUser[$message;yes]]) | [Banner]($getUserBanner[$findUser[$message;yes]])
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]
$image[1;$replaceText[$getUserBanner[$findUser[$message;yes];1024];null;;1]]

$else
$description[1;
\`$userTag[$findUser[$message;yes]] ($findUser[$message;yes])\`\n**Highest Role:** <@&$highestRole[$findUser[$message;yes]]>\n**Joined Discord:** <t:$truncate[$divide[$creationDate[$findUser[$message[1]];$guildID;ms];1000]]:R>\n**Joined Server:** <t:$truncate[$divide[$memberJoinedDate[$findUser[$message[1]];$guildID;ms];1000]]:R>
\nLinks: [Avatar]($userAvatar[$findUser[$message;yes]])
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]
$image[1;$replaceText[$getUserBanner[$findUser[$message;yes];1024];null;;1]]
$endif

$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
`
}