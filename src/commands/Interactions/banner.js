module.exports = {
name: "banner",
code: `
$globalCooldown[5s;Please wait before using this command again. This helps us enforce ratelimits. %time%]
$title[1;$username[$authorID]'s Banner]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$authorBanner]
$description[1;Download: [Link]($authorBanner)]
$footer[1;Requested by $username[$authorID]]
$addTimestamp[1;]`
}