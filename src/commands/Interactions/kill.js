module.exports = {
name: "kill",
code: `
$username dies by **$randomText[being defenstrated;being bonked;being hit with a suspiciously large spoon;bowing too much and falling off a cliff;following the latest 100% safe trend;by pressing a suspiciously out of place red button]**.
$onlyIf[$getGlobalUserVar[FamilyMode;$findUser[$message;no]]!=True;User has family mode.]
$onlyIf[$findUser[$message;no]!=$clientID;hmmm no, that's not possible.]
$onlyIf[$findUser[$message;no]!=$authorID;I can't allow you to do that to yourself.]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interactions turned off.]
$globalCooldown[5s;Please wait before using this social command again. This helps us enforce ratelimits. %time%]
$suppressErrors[Please mention a user.]
$onlyIf[$isBot[$authorID]!=true;]
`
}
