module.exports = {
name: "whois",
$if: "v4",
aliases: ["wi", "ui", "userinfo"],
code: `
$if[$getUserBanner[$get[u]]!=null]
$description[1;
\`$userTag[$get[u]] ($get[u])\`\n**Highest Role:** <@&$highestRole[$get[u]]>\n**Joined Discord:** <t:$truncate[$divide[$creationDate[$findUser[$message[1]];$guildID;ms];1000]]:R>\n**Joined Server:** <t:$truncate[$divide[$memberJoinedDate[$findUser[$message[1]];$guildID;ms];1000]]:R>
\nLinks: [Avatar]($userAvatar[$get[u]]) | [Banner]($getUserBanner[$get[u]])
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;$userAvatar[$get[u]]]
$image[1;$replaceText[$getUserBanner[$get[u];1024];null;;1]]

$else
$description[1;
\`$userTag[$get[u]] ($get[u])\`\n**Highest Role:** <@&$highestRole[$get[u]]>\n**Joined Discord:** <t:$truncate[$divide[$creationDate[$findUser[$message[1]];$guildID;ms];1000]]:R>\n**Joined Server:** <t:$truncate[$divide[$memberJoinedDate[$findUser[$message[1]];$guildID;ms];1000]]:R>
\nLinks: [Avatar]($userAvatar[$get[u]])
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;$userAvatar[$get[u]]]
$image[1;$replaceText[$getUserBanner[$get[u];1024];null;;1]]
$endif

$let[u;$findUser[$message;yes]]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`userinfo\` again in **%sec%s**.}
{color:#ff2050}}]
`
}