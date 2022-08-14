module.exports = {
name: "profile",
prototype: "slash",
type: "interaction",
code: `
$interactionReply[
;
{newEmbed:
{title:$username[$interactionData[options.data[0].value]]'s profile}
{description:<:RPGCoin:855767372534906920>**$getGlobalUserVar[Coins;$interactionData[options.data[0].value]]** \`Coins\`
<:RPGHeart:855755205102534686>$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[HP;$interactionData[options.data[0].value]]==$getGlobalUserVar[MaxHP;$interactionData[options.data[0].value]]];true;**$getGlobalUserVar[HP;$interactionData[options.data[0].value]]**;1];false;**$getGlobalUserVar[HP;$interactionData[options.data[0].value]]/$getGlobalUserVar[MaxHP;$interactionData[options.data[0].value]]**;1] \`HP\`
<:ATKF:915551150093250592>**$getGlobalUserVar[ATK;$interactionData[options.data[0].value]]** \`ATK\`}
{thumbnail:$userAvatar[$interactionData[options.data[0].value]]}
{image:$replaceText[$getUserBanner[$interactionData[options.data[0].value]];null;;1]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
}]
`
}