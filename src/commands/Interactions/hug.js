module.exports = {
	name: "hug",
	$if: "v4",
	code: `
	$globalCooldown[5s;Please wait **%time%** before using this social command again.]

  $if[$findUser[$message;no]==$authorID]
	$title[1;Dank RPG hugs $username[$authorID]]
	$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
	$image[1;$httpRequest[https://api.dankrpg.xyz/anime/hug;GET;;url]]
	$else

	$if[$isBot[$findUser[$message;no]]==true]
	You hug yourself (mention a user not a bot)
	$else

	$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]

	$title[1;$username[$authorID] hugs $username[$findUser[$message;no]]]
	$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
	$image[1;$httpRequest[https://api.dankrpg.xyz/anime/hug;GET;;url]]
	$endif
	$endif
	$suppressErrors[Mention someone.]
	$onlyIf[$isBot[$authorID]!=true;]
	`
}
