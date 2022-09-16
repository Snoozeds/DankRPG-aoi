module.exports = {
name: "fight",
aliases: ["attack", "battle"],
$if: "v4",
code:`
$if[$getGlobalUserVar[HP;$authorID]<=0]
$title[1;$username[$authorID]'s Fight]
$description[1;$username[$authorID] starts a fight.
$username[$authorID] **dies in battle**. Their stats get reset.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[MaxHP;100;$authorID]
$setGlobalUserVar[HP;100;$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else
$title[1;$username[$authorID]'s Fight]
$description[1;$username[$authorID] starts a fight.
$if[$randomText[WinCond;LoseCond;LoseCond;LoseCond]==LoseCond]
$username[$authorID] loses **$getVar[Heart]$random[$round[$divide[$getGlobalUserVar[MaxHP;$authorID];10]];$round[$divide[$getGlobalUserVar[MaxHP;$authorID];9]]]**
They also find a **$randomText[chest;body;hidden stash]** and gain **$getVar[Coi]$random[$round[$divide[$getGlobalUserVar[MaxHP;$authorID];13]];$round[$divide[$getGlobalUserVar[MaxHP;$authorID];11]]]**
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[$round[$divide[$getGlobalUserVar[MaxHP;$authorID];13]];$round[$divide[$getGlobalUserVar[MaxHP;$authorID];11]]]];$authorID]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP;$authorID];$random[$round[$divide[$getGlobalUserVar[MaxHP;$authorID];10]];$round[$divide[$getGlobalUserVar[MaxHP;$authorID];9]]]];$authorID]
$else$username[$authorID] finds a **$randomText[chest;body;hidden stash]** and gains **$getVar[Coi]$random[$round[$divide[$getGlobalUserVar[MaxHP;$authorID];11]];$round[$divide[$getGlobalUserVar[MaxHP;$authorID];9]]]**
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[$round[$divide[$getGlobalUserVar[MaxHP;$authorID];11]];$round[$divide[$getGlobalUserVar[MaxHP;$authorID];9]]]];$authorID]
$endif
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`fight\` again in **%sec%s**.}
{color:#ff2050}}]
$endif
`
}