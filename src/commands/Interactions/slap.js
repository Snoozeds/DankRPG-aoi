module.exports = {
name: "slap",
code: `
$globalCooldown[10s;Please wait **%time%** before using this social command again.]

$if[$findUser[$message;no]==$authorID]
$title[Dank RPG slaps $username[$authorID]]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$image[$httpRequest[https://api.dankrpg.xyz/anime/slap;GET;;url]]
$else

$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has social commands disabled from their settings.]

$title[$username[$authorID] slaps $username[$findUser[$message;no]]]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$image[$httpRequest[https://api.dankrpg.xyz/anime/slap;GET;;url]]
$endif
$suppressErrors[Mention someone.]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]
`
}
