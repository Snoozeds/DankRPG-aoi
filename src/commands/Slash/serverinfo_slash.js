module.exports = {
name: "serverinfo",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[
;
{newEmbed:
{description:\`$serverName[$guildID] ($guildID)\`
**Server Owner:** <@$ownerID>
**Server Created:** <t:$truncate[$divide[$creationDate[$guildID;ms];1000]]:R>
**Member Count:** $membersCount members
**Boost Level:** $replaceText[$replaceText[$serverBoostLevel[$guildID];NONE;0;1];TIER_;;1]

Links: [Icon]($serverIcon[$guildID])$replaceText[$replaceText[$checkCondition[$serverBanner!=];true; | [Banner]($serverBanner[$guildID]);1];false;;1]}
{thumbnail:$serverIcon[$guildID]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
]
`
}