module.exports = {
name: "banner",
$if: "v4",
code: `

$if[$getUserBanner[$findUser[$message;yes]]==null]
$replaceText[$replaceText[$checkCondition[$findUser[$message;yes]==$authorID];true;You do not;1];false;**$username[$findUser[$message;yes]]** does not;1] have a custom nitro banner.
$replaceText[$replaceText[$checkCondition[$findUser[$message;yes]==$authorID];true;Your;1];false;Their;1] banner color is **$getUserAccentColor[$findUser[$message;yes]]**.

$else
$title[1;$username[$findUser[$message;yes]]'s Banner]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$getUserBanner[$findUser[$message;yes]]]
$description[1;Download: [Link]($getUserBanner[$findUser[$message;yes]])]
$footer[1;Requested by $username[$authorID]]
$addTimestamp[1;]
$endif

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`banner\` again in **%sec%s**.}
{color:#ff2050}}]`
}