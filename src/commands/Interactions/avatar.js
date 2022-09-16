module.exports = {
name: "avatar",
aliases: "av",
code: `
$title[1;$username[$findUser[$message;yes]]'s Avatar]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$image[1;$userAvatar[$findUser[$message;yes]]]
$description[1;Download: [Link]($userAvatar[$findUser[$message;yes]])]
$footer[1;Requested by $username[$authorID]]
$addTimestamp[1;]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has user interactions disabled from their settings.]
$onlyIf[$isBot[$authorID]!=true;]

$globalCooldown[5s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`avatar\` again in **%sec%s**.}
{color:#ff2050}}]
`
}
