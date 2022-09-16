module.exports = {
name: "bet",
aliases: "gamble",
$if: "v4",
code: `

$if[$randomText[Win;Lose;Lose]==Win]
$title[1;You won your bet.]
$color[1;#7CFC00]
$description[1;**$username[$authorID]**'s bet
+ $getVar[Coi]$multi[$message[1];2]

**Your new balance: $getVar[Coi]$getGlobalUserVar[Coins;$authorID]**
]
$footer[1;Chance of winning: 1/3]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message[1];2]]]

$else
$title[1;You lost your bet.]
$color[1;#FF0000]
$description[1;**$username[$authorID]**'s bet
- $getVar[Coi]$message[1]

**Your new balance: $getVar[Coi]$getGlobalUserVar[Coins;$authorID]**
]
$footer[1;Chance of winning: 1/3]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$message[1]]]
$endif

$onlyIf[$message!=;You need to mention how much to bet!]
$onlyIf[$isNumber[$message]!=false;Not a number.]
$onlyIf[$checkContains[$message;-]!=true;No negative values allowed.]
$onlyIf[$message<=$getGlobalUserVar[Coins;$authorID];You don't have this much.]
$onlyIf[$message>49;You need to bet at least $getVar[Coi]**50**.]
$onlyIf[$message<9999;You can't gamble more than $getVar[Coi]9999. Sorry.]

$globalCooldown[15s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`bet\` again in **%sec%s**.}
{color:#ff2050}}]
`
}