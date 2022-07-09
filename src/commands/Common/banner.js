module.exports = {
name: "banner",
$if: "v4",
code: `

$if[$authorBanner==null]
You do not have a banner.
$globalCooldown[2s;]

$else
$globalCooldown[5s;Please wait before using this command again. This helps us enforce ratelimits. %time%]
$title[1;$username[$authorID]'s Banner]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$authorBanner]
$description[1;Download: [Link]($authorBanner)]
$footer[1;Requested by $username[$authorID]]
$addTimestamp[1;]
$endif`
}