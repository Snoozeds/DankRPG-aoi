module.exports = {
	name: "hug",
	code: `
	$globalCooldown[10s;Please wait **%time%** before using this userInteraction command again.]

  $if[$mentioned[1]==$authorID]
	$title[Secret Bot hugs $username[$authorID]]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$image[$httpRequest[https://apiv1.snoozeds.repl.co/anime/hug;GET;;url]]
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
	$image[$httpRequest[https://apiv1.snoozeds.repl.co/anime/hug;GET;;url]]
	$endif
	$endif
	$endif
	`
}
