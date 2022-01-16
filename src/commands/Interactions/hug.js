module.exports = {
	name: "hug",
	code: `
	$globalCooldown[10s;Please wait **%time%** before using this userInteraction command again.]

  $if[$mentioned[1]==$authorID]
	$title[Dank RPG hugs $username[$authorID]]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$image[https://dankrpg.xyz/api/hug/$random[1;15].gif]
	$else

	$if[$mentioned[1]==914941866875703306]
	Ew.
	$else

	$if[$isBot[$mentioned[1]]==true]
	You hug yourself (mention a user not a bot)
	$else

	$onlyIf[$getGlobalUserVar[UserInt;$mentioned[1]]!=False;This user has interaction commands disabled from their settings.]

	$title[$username[$authorID] hugs $username[$mentioned[1]]]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$image[https://dankrpg.xyz/api/hug/$random[1;15].gif]
	$endif
	$endif
	$endif
	$suppressErrors[Mention someone.]
	`
}
