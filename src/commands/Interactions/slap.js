module.exports = {
name: "slap",
code: `
$globalCooldown[10s;Please wait **%time%** before using this social command again.]

$if[$mentioned[1]==$authorID]
$title[Dank RPG slaps $username[$authorID]]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$image[$httpRequest[https://api.dankrpg.xyz/anime/slap;GET;;url]]
$else

$onlyIf[$getGlobalUserVar[UserInt;$mentioned[1]]!=False;This user has interaction commands disabled from their settings.]

$title[$username[$authorID] slaps $username[$mentioned[1]]]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$image[$httpRequest[https://api.dankrpg.xyz/anime/slap;GET;;url]]
$endif
$suppressErrors[Mention someone.]
`
}
