module.exports = {
name: "slots",
code: `

$if[$randomText[Lose;Lose;Lose;Lose;Lose;Lose;Lose;Win]==Win]
$title[You win!]
$description[
$randomText[\[⭐\]\[⭐\]\[⭐\];\[🎁\]\[🎁\]\[🎁\];\[💰\]\[💰\]\[💰\]]
+ $getVar[Coi]**$multi[$message;2]**]
$color[$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message;2]];$authorID]
$globalCooldown[1m;Please wait %time%.]
$else

$title[You lose!]
$description[$randomText[\[🎁\]\[⭐\]\[⭐\];\[⭐\]\[🎁\]\[⭐\];\[⭐\]\[⭐\]\[🎁\]]
- $getVar[Coi]**$message**]
$color[$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$message];$authorID]
$globalCooldown[1m;Please wait %time%.]
$endif

$onlyIf[$message!=;You need to mention how much to bet!]
$onlyIf[$isNumber[$message]!=false;Not a number.]
$onlyIf[$checkContains[$message;-]!=true;No negative values allowed.]
$onlyIf[$message<$getGlobalUserVar[Coins;$authorID];You don't have this much.]
$onlyIf[$message>99;You need to bet at least $getVar[Coi]**100**.]
`, // Let's rig it awfully, just like in real life :)
}
