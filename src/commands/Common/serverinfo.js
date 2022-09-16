module.exports = {
name: "serverinfo",
aliases: "si",
$if: "v4",
code: `
$description[1;
\`$serverName ($guildID)\`
**Server Owner:** <@$ownerID>
**Server Created:** <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R>
**Member Count:** $membersCount members
**Boost Level:** $replaceText[$replaceText[$serverBoostLevel[$guildID];NONE;0;1];TIER_;;1]

Links: [Icon]($serverIcon[$guildID])$replaceText[$replaceText[$checkCondition[$serverBanner!=];true; | [Banner]($serverBanner[$guildID]);1];false;;1]
]
$thumbnail[1;$serverIcon[$guildID]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`serverinfo\` again in **%sec%s**.}
{color:#ff2050}}]`
}
