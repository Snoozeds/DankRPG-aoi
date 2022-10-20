module.exports = {
name: "serverinfo",
aliases: "si",
$if: "v4",
code: `
$description[1;
\`$serverName ($get[gid])\`
**Server Owner:** <@$ownerID>
**Server Created:** <t:$truncate[$divide[$creationDate[$get[gid];ms];1000]]:R>
**Member Count:** $membersCount members
**Boost Level:** $replaceText[$replaceText[$serverBoostLevel[$get[gid]];NONE;0;1];TIER_;;1]

Links: [Icon]($serverIcon[$get[gid]])$replaceText[$replaceText[$checkCondition[$serverBanner!=];true; | [Banner]($serverBanner[$get[gid]]);1];false;;1]
]
$thumbnail[1;$serverIcon[$get[gid]]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$let[gid;$guildID]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`serverinfo\` again in **%sec%s**.}
{color:#ff2050}}]`
}
