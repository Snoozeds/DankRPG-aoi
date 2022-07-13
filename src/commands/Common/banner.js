module.exports = {
name: "banner",
$if: "v4",
code: `

$if[$getUserBanner[$findUser[$message;yes]]==null]
$username[$findUser[$message;yes]] does not have a custom banner. 
$globalCooldown[2s;]

$else
$globalCooldown[5s;Please wait before using this command again. This helps us enforce ratelimits. %time%]
$title[1;$username[$findUser[$message;yes]]'s Banner]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$getUserBanner[$findUser[$message;yes]]]
$description[1;Download: [Link]($getUserBanner[$findUser[$message;yes]])]
$footer[1;Requested by $username[$authorID]]
$addTimestamp[1;]
$endif`
}