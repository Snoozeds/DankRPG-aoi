module.exports = {
name: "kill",
code: `
$username kills $username[$findUser[$message;no]] by **$randomText[yeeting them;defenestrating them;ejecting them;stabbing them;kicking them;bonking them to death]**
$onlyIf[$getGlobalUserVar[FamilyMode;$findUser[$message;no]]!=True;User has family mode.]
$onlyIf[$findUser[$message;no]!=$clientID;haha I am immortal\nL]
$onlyIf[$findUser[$message;no]!=$authorID;I can't allow you to do that to yourself.]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interactions turned off.]
$globalCooldown[5s;Please wait **%time%** before using this social command again.]
$suppressErrors[Please mention a user.]
$onlyIf[$isBot[$authorID]!=true;]
	`
}
