module.exports = {
	name: "hug",
	code: `
	$globalCooldown[10s;Please wait **%time%** before using this social command again.]

  $if[$findUser[$message;no]==$authorID]
	$title[Dank RPG hugs $username[$authorID]]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$image[$httpRequest[https://api.dankrpg.xyz/anime/hug;GET;;url]]
	$else

	$if[$isBot[$findUser[$message;no]]==true]
	You hug yourself (mention a user not a bot)
	$else

	$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]

	$title[$username[$authorID] hugs $username[$findUser[$message;no]]]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$image[$httpRequest[https://api.dankrpg.xyz/anime/hug;GET;;url]]
	$endif
	$endif
	$suppressErrors[Mention someone.]
	$onlyIf[$isBot[$authorID]!=true;]
	$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]
	`
}
