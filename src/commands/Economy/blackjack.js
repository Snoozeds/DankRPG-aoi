module.exports = [{
name: "blackjack",
aliases: ["bj"],
$if: "v4",
code: `

$if[$message==all]
$title[1;$username's Blackjack]
$description[1;**Bet: $getVar[Coi]$getGlobalUserVar[Coins;$authorID]**

**__Dealer's Hand__**
:black_joker: **$random[10;12]**

**__Your Hand__**
:black_joker: **$random[12;13]**

Respond with either \`$getServerVar[Prefix;$guildID]h\` or \`$getServerVar[Prefix;$guildID]s\`]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$onlyIf[$getGlobalUserVar[Coins;$authorID]>49;You need to bet at least $getVar[Coi]**50**.]

$setGlobalUserVar[bjActive;True;$authorID]
$setGlobalUserVar[bjBet;$getGlobalUserVar[Coins;$authorID];$authorID]


$else
$title[1;$username's Blackjack]
$description[1;**Bet: $getVar[Coi]$message[1]**

**__Dealer's Hand__**
:black_joker: **$random[10;12]**

**__Your Hand__**
:black_joker: **$random[12;13]**

Respond with either \`$getServerVar[Prefix;$guildID]h\` or \`$getServerVar[Prefix;$guildID]s\`]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$onlyIf[$message!=;You need to mention how much to bet!]
$onlyIf[$isNumber[$message]!=false;Not a number.]
$onlyIf[$checkContains[$message;-]!=true;No negative values allowed.]
$onlyIf[$message<$getGlobalUserVar[Coins;$authorID];You don't have this much.]
$onlyIf[$message>49;You need to bet at least $getVar[Coi]**50**.]

$setGlobalUserVar[bjActive;True;$authorID]
$setGlobalUserVar[bjBet;$message;$authorID]
$endif
$globalCooldown[5s;Calm down you blackjack addict. %time%]`
},

{
name: "hit",
aliases: ["h"],
$if: "v4",
code: `

$if[$randomText[Win;Lose;Lose]==Win]
$title[1;$username's Blackjack]
$description[1;**Bet: $getVar[Coi]$getGlobalUserVar[bjBet;$authorID]**

You win!!
+ $getVar[Coi]$multi[$getGlobalUserVar[bjBet;$authorID];2]
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[Coins;$sum[$multi[$getGlobalUserVar[bjBet;$authorID];2];$getGlobalUservar[Coins;$authorID]];$authorID]


$else
$title[1;$username's Blackjack]
$description[1;**Bet: $getVar[Coi]$getGlobalUserVar[bjBet;$authorID]**

You lose!!
- $getVar[Coi]$getGlobalUserVar[bjBet;$authorID]
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$getGlobalUserVar[bjBet;$authorID]];$authorID]

$endif
$setGlobalUserVar[bjActive;False;$authorID]
$onlyIf[$getGlobalUserVar[bjActive;$authorID]!=False;]
`
},

{
name: "stand",
aliases: ["s"],
$if: "v4",
code: `

$if[$randomText[Win;Lose;Lose]==Win]
$title[1;$username's Blackjack]
$description[1;**Bet: $getVar[Coi]$getGlobalUserVar[bjBet;$authorID]**

You win!!
+ $getVar[Coi]$multi[$getGlobalUserVar[bjBet;$authorID];2]
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[Coins;$sum[$multi[$getGlobalUserVar[bjBet;$authorID];2];$getGlobalUservar[Coins;$authorID]];$authorID]

$else
$title[1;$username's Blackjack]
$description[1;**Bet: $getVar[Coi]$getGlobalUserVar[bjBet;$authorID]**

You lose!!
- $getVar[Coi]$getGlobalUserVar[bjBet;$authorID]
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];$getGlobalUserVar[bjBet;$authorID]];$authorID]

$endif
$setGlobalUserVar[bjActive;False;$authorID]
$onlyIf[$getGlobalUserVar[bjActive;$authorID]!=False;]
`
} // Yes, not really blackjack. I'm lazy.

]