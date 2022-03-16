module.exports = {
name: "avatar",
aliases: "av",
code: `
$globalCooldown[10s;Please wait **%time%** before using this command again.]
$title[$username[$findUser[$message;yes]]'s Avatar]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$image[$userAvatar[$findUser[$message;yes]]]
$description[Download: [Link]($userAvatar)]
$footer[Requested by $username[$authorID]]
$addTimestamp
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has user interactions disabled from their settings.]
$suppressErrors[Mention someone.]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]`
}
