module.exports = [{
name: "dungeon",
aliases: ["startdungeon", "dun", "dung", "du"],
$if: "v4",
code: `

$if[$getGlobalUserVar[Coins;$authorID]<=1000]
$title[1;You don't have enough coins!]
$description[1;You need at least **$getVar[Coi]1000** to start a dungeon!]
$color[1;#ff2050]
$endif

$if[$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaSword;$authorID]==True];true;$randomText[Loot;Loot;Loot;Enemy];1];false;$randomText[Loot;Loot;Loot;Enemy;Enemy];1]==Loot]
$title[1;$username[$authorID], you start a dungeon...]
$description[1;You find **$randomText[$getVar[Coi]$random[500;1000];$getVar[Coi]$random[500;1000];$getVar[MegaCoi]1]**!

$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaSword;$authorID]==True];true;Your **Mega Sword** also found you $getVar[Coi]$random[250;500];1]$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID]$random[250;500]];$authorID];false;Check out \`$getServerVar[Prefix;$guildID]megashop\` to earn more rewards!;1]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$if[$randomText[$getVar[Coi]$random[500;1000];$getVar[Coi]$random[500;1000];$getVar[MegaCoi]1]==$getVar[MegaCoi]1]
$setGlobalUserVar[MegaCoins;$sum[$getGlobalUserVar[MegaCoins;$authorID];1];$authorID]
$else
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[500;1000]];$authorID]
$endif

$else
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaSword;$authorID]==True];true;$randomText[$round[$divide[$getGlobalUserVar[Coins;$authorID];6]];$round[$divide[$getGlobalUserVar[Coins;$authorID];7]]]];false;$randomText[$round[$divide[$getGlobalUserVar[Coins;$authorID];3]];$round[$divide[$getGlobalUserVar[Coins;$authorID];4]]];1]];$authorID]
$title[1;$username[$authorID], you start a dungeon...]
$description[1;You get attacked while in the dungeon!
You **lose $getVar[Coi]$replaceText[$replaceText[$checkCondition[$getGlobalUserVar[MegaSword;$authorID]==True];true;$randomText[$round[$divide[$getGlobalUserVar[Coins;$authorID];6]];$round[$divide[$getGlobalUserVar[Coins;$authorID];7]]]];false;$randomText[$round[$divide[$getGlobalUserVar[Coins;$authorID];3]];$round[$divide[$getGlobalUserVar[Coins;$authorID];4]]];1]** while escaping!]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$endif

$if[$authorID!=$getVar[ownid]]
$globalCooldown[1d;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You are tired from your last dungeon.\nYou can use \`dungeon\` again in **%hour%h %min%m %sec%s**.}
{color:#ff2050}}]
$endif

$onlyForIDs[$getVar[ownid];{newEmbed:
{title:This command is locked!}
{description:This command is locked as it is being worked on. Check back later!}
{color:#ff2050}}]
`
}]