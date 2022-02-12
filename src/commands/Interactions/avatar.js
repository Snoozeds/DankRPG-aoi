module.exports = {
name: "avatar",
aliases: "av",
code: `
$globalCooldown[10s;Please wait **%time%** before using this command again.]
$title[$username[$mentioned[1;yes]]'s Avatar]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$image[$userAvatar[$mentioned[1;yes]]]
$description[Download: [Link]($userAvatar)]
$footer[Requested by $username[$authorID]]
$addTimestamp
$onlyIf[$getGlobalUserVar[UserInt;$mentioned[1]]!=False;This user has user interactions disabled from their settings.]
$suppressErrors[Mention someone.]`
}
