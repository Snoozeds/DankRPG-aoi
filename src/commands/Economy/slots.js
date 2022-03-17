module.exports = {
name: "slots",
$if: "v4",
code: `

$if[$randomText[Lose;Lose;Lose;Lose;Lose;Lose;Lose;Win]==Win]
$title[1;You win!]
$description[1;
$randomText[\[⭐\]\[⭐\]\[⭐\];\[🎁\]\[🎁\]\[🎁\];\[💰\]\[💰\]\[💰\]]
+ $getVar[Coi]**$multi[$message;2]**]
$color[1;$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message;2]];$authorID]
$globalCooldown[5s;Please wait %time%.]
$else

$title[1;You lose!]
$description[1;$randomText[\[🎁\]\[⭐\]\[⭐\];\[⭐\]\[🎁\]\[⭐\];\[⭐\]\[⭐\]\[🎁\]]
- $getVar[Coi]**$message**]
$color[1;$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$message];$authorID]
$globalCooldown[5s;Please wait %time%.]
$endif

$onlyIf[$message!=;You need to mention how much to bet!]
$onlyIf[$isNumber[$message]!=false;Not a number.]
$onlyIf[$checkContains[$message;-]!=true;No negative values allowed.]
$onlyIf[$message<$getGlobalUserVar[Coins;$authorID];You don't have this much.]
$onlyIf[$message>99;You need to bet at least $getVar[Coi]**100**.]
$onlyIf[$isBot[$authorID]!=true;]
`, // Let's rig it awfully, just like in real life :)
}
