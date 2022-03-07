module.exports = {
	name: "hug",
	code: `
	$globalCooldown[10s;Please wait **%time%** before using this social command again.]

  $if[$mentioned[1]==$authorID]
	$title[Dank RPG hugs $username[$authorID]]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$image[$httpRequest[https://api.dankrpg.xyz/anime/hug;GET;;url]]
	$else

	$if[$isBot[$mentioned[1]]==true]
	You hug yourself (mention a user not a bot)
	$else

	$onlyIf[$getGlobalUserVar[UserInt;$mentioned[1]]!=False;This user has interaction commands disabled from their settings.]

	$title[$username[$authorID] hugs $username[$mentioned[1]]]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$image[$httpRequest[https://api.dankrpg.xyz/anime/hug;GET;;url]]
	$endif
	$endif
	$suppressErrors[Mention someone.]
	$onlyIf[$isBot[$authorID]!=true;]
	`
}
