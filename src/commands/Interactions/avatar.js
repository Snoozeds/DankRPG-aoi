module.exports = {
name: "avatar",
aliases: "av",
code: `
$globalCooldown[5s;Please wait before using this command again. This helps us enforce ratelimits. %time%]
$title[1;$username[$findUser[$message;yes]]'s Avatar]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$userAvatar[$findUser[$message;yes]]]
$description[1;Download: [Link]($userAvatar[$findUser[$message;yes]])]
$footer[1;Requested by $username[$authorID]]
$addTimestamp[1;]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has user interactions disabled from their settings.]
$onlyIf[$isBot[$authorID]!=true;]`
}
