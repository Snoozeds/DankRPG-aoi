module.exports = {
name: "slots",
$if: "v4",
code: `
$if[$randomText[Lose;Lose;Lose;Win]==Win]
$title[1;You win!]
$description[1;
$randomText[\[⭐\]\[⭐\]\[⭐\];\[🎁\]\[🎁\]\[🎁\];\[💰\]\[💰\]\[💰\]]
+ $getVar[Coi]**$multi[$message;2]**]
$color[1;$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message;2]];$authorID]
$else

$title[1;You lose!]
$description[1;$randomText[\[🎁\]\[⭐\]\[⭐\];\[⭐\]\[🎁\]\[⭐\];\[⭐\]\[⭐\]\[🎁\]]
- $getVar[Coi]**$message**]
$color[1;$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$message];$authorID]
$endif

$if[$getGlobalUserVar[slotAchievement;$authorID]!=<:Unlocked:899050875719393281>]
$if[$getGlobalUserVar[slotAmount;$authorID]>1000]
**Congratulations!** You unlocked an achievement: "Slots Addict"\n+$getVar[Coi]**100**.
$setGlobalUserVar[slotAchievement;<:Unlocked:899050875719393281>;$authorID]
$endif
$endif

$setGlobalUserVar[slotAmount;$sum[$getGlobalUservar[slotAmount;$authorID];$message[1]];$authorID]
$onlyIf[$message!=;You need to mention how much to bet!]
$onlyIf[$isNumber[$message]!=false;Not a number.]
$onlyIf[$checkContains[$message;-]!=true;No negative values allowed.]
$onlyIf[$message<=$getGlobalUserVar[Coins;$authorID];You don't have this much.]
$onlyIf[$message>49;You need to bet at least $getVar[Coi]**50**.]

$globalCooldown[5s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`slots\` again in **%sec%s**.}
{color:#ff2050}}]

`, // Let's rig it awfully, just like in real life :)
}
