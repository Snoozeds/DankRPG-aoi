module.exports = {
	name: "kill",
	code: `
	$globalCooldown[10s;Please wait **%time%** before using this userInteraction command again.]
	$onlyif[$getGlobalUserVar[FamilyMode;$mentioned[1]]!=True;]
	$onlyif[$getGlobalUserVar[FamilyMode;$authorID!=True;]
	$onlyif[$isbot[$mentioned[1]]!=true;BOTS WILL NEVER DIE]
	$onlyif[$mentioned[1]!=$authorID;I can't allow you to do that to yourself.]
	$onlyif[$getGlobalUserVar[UserInt;$mentioned[1]]!=False;This user has interactions turned off.]
	$username kills $username[$mentioned[1]] by $randomText[Yeeting them;defenestrating them;ejecting them;stabbing them;kicking them;bonking them to death]
	$suppressErrors
	`
}
