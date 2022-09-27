module.exports = {
name: "kill",
code: `
$username[$findUser[$message;no]] dies by **$randomText[being defenstrated;being bonked;being hit with a suspiciously large spoon;bowing too much and falling off a cliff;following the latest 100% safe trend;pressing a suspiciously out of place red button]**.

$onlyIf[$findUser[$message;no]!=$clientID;hmmm no, that's not possible.]
$onlyIf[$findUser[$message;no]!=$authorID;I can't allow you to do that to yourself.]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interactions turned off.]
$suppressErrors[Please mention a user.]

$globalCooldown[5s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`kill\` again in **%sec%s**.}
{color:#ff2050}}]
`
}
