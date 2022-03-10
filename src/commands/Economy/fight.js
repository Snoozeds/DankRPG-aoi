module.exports = {
name: "fight",
code: `
$if[$getGlobalUserVar[ATK;$authorID]==1]
$if[$getGlobalUserVar[HP;$authorID]<$random[1;5]]
You die because you have run out of HP.
$setGlobalUserVar[HP;100:$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else

$title[A new monster has spawned!]
$description[You fight it, dealing **1 ATK**.\nIt dies, and you earn <:RPGCoin:855767372534906920>**$random[5;10]**.
You now have <:RPGHeart:855755205102534686>**$getGlobalUserVar[HP]/$getGlobalUserVar[MaxHP]**.
]
$color[$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[5;10]]]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP];$random[1;5]]]
$endif

$else
$if[$getGlobalUserVar[ATK;$authorID]==2]
$if[$getGlobalUserVar[HP;$authorID]<$random[5;10]]
You die because you have run out of HP.
$setGlobalUserVar[HP;100:$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else
$title[A new monster has spawned!]
$description[You fight it, dealing **2 ATK**.\nIt dies, and you earn <:RPGCoin:855767372534906920>**$random[15;20]**.
You now have <:RPGHeart:855755205102534686>**$getGlobalUserVar[HP]/$getGlobalUserVar[MaxHP]**.
]
$color[$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[15;20]]]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP];$random[5;10]]]
$endif

$else
$if[$getGlobalUserVar[ATK;$authorID]==3]
$if[$getGlobalUserVar[HP;$authorID]<$random[10;15]]
You die because you have run out of HP.
$setGlobalUserVar[HP;100:$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else
$title[A new monster has spawned!]
$description[You fight it, dealing **3 ATK**.\nIt dies, and you earn <:RPGCoin:855767372534906920>**$random[20;25]**.
You now have <:RPGHeart:855755205102534686>**$getGlobalUserVar[HP]/$getGlobalUserVar[MaxHP]**.
]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[20;25]]]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP];$random[10;15]]]
$endif

$else
$if[$getGlobalUserVar[ATK;$authorID]==4]
$if[$getGlobalUserVar[HP;$authorID]<$random[15;20]]
You die because you have run out of HP.
$setGlobalUserVar[HP;100:$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else
$title[A new monster has spawned!]
$description[You fight it, dealing **4 ATK**.\nIt dies, and you earn <:RPGCoin:855767372534906920>**$random[25;30]**.
You now have <:RPGHeart:855755205102534686>**$getGlobalUserVar[HP]/$getGlobalUserVar[MaxHP]**.
]
$color[$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[25;30]]]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP];$random[15;20]]]
$endif

$else
$if[$getGlobalUserVar[ATK;$authorID]==5]
$if[$getGlobalUserVar[HP;$authorID]<$random[20;25]]
You die because you have run out of HP.
$setGlobalUserVar[HP;100:$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$else
$title[A new monster has spawned!]
$description[You fight it, dealing **5 ATK**.\nIt dies, and you earn <:RPGCoin:855767372534906920>**$random[30;35]**.
You now have <:RPGHeart:855755205102534686>**$getGlobalUserVar[HP]/$getGlobalUserVar[MaxHP]**.
]
$color[$getGlobalUserVar[EmbedColor]]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[30;35]]]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP];$random[30;35]]]
$endif
$endif
$endif
$endif
$endif
$endif
$globalCooldown[25s;Please wait **%time%** before fighting again.]
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
`
}
