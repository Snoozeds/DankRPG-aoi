module.exports = {
name: "banner",
$if: "v4",
code: `

$if[$getUserBanner[$findUser[$message;yes]]==null]
$replaceText[$replaceText[$checkCondition[$get[u]==$authorID];true;You do not;1];false;**$username[$get[u]]** does not;1] have a custom nitro banner.
$replaceText[$replaceText[$checkCondition[$get[u]==$authorID];true;Your;1];false;Their;1] banner color is **$getUserAccentColor[$get[u]]**.

$else
$title[1;$username[$get[u]]'s Banner]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$getUserBanner[$get[u]]]
$description[1;Download: [Link]($getUserBanner[$get[u]])]
$footer[1;Requested by $username[$authorID]]
$addTimestamp[1;]
$endif

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`banner\` again in **%sec%s**.}
{color:#ff2050}}]

$let[u;$findUser[$message;yes]]`
} // For some reason $getUserBanner doesn't work with $get. Maybe because the function starts with "$get"??