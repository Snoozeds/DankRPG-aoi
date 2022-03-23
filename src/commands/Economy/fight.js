module.exports = {
name: "fight",
$if: "v4",
code:`
$if[$sub[$getGlobalUserVar[HP;$authorID];$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];15]]]<=$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];15]]]
You die because you have run out of HP.
$setGlobalUserVar[HP;100;$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else

$description[1;
You fight an enemy with **$getGlobalUserVar[ATK;$authorID]ATK**.
You gain $getVar[Coi]**$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];20]]** and lose **$getVar[Heart]$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];15]]**.
You now have **$getVar[Heart]$getGlobalUserVar[HP]/$getGlobalUserVar[MaxHP;$authorID]**]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP;$authorID];$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];15]]];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[$getGlobalUserVar[ATK;$authorID];$multi[$getGlobalUserVar[ATK;$authorID];20]]];$authorID]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$endif
$globalCooldown[10s;Please wait **%time%** before fighting again.]
`
}