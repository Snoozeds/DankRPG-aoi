module.exports = {
name: "fight",
aliases: ["attack", "battle"],
$if: "v4",
code:`
$if[$sub[$getGlobalUserVar[HP;$authorID];$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];15]]<=$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];15]]]
You die because you have run out of HP.
$setGlobalUserVar[HP;100;$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else

$title[1;$username[$authorID]: Fight]
$description[1;
You fight an enemy with **$getGlobalUserVar[ATK;$authorID]ATK**.
You gain $getVar[Coi]**$random[$multi[$getGlobalUserVar[ATK;$authorID];15];$multi[$getGlobalUserVar[ATK;$authorID];25]]** and lose **$getVar[Heart]$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];12]]**.
You now have **$getVar[Heart]$getGlobalUserVar[HP;$authorID]/$getGlobalUserVar[MaxHP;$authorID]**]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP;$authorID];$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];12]]];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[$multi[$getGlobalUserVar[ATK;$authorID];15];$multi[$getGlobalUserVar[ATK;$authorID];25]]];$authorID]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$endif
$globalCooldown[10s;Please wait **%time%** before fighting again.]
`
}