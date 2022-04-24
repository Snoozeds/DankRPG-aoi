module.exports = [{
name: "hunt",
aliases: ["hunting"],
$if: "v4",
code: `
$if[$getGlobalUserVar[HP;$authorID]<=30]
You die because you have run out of HP.
$setGlobalUserVar[HP;100;$authorID]
$setGlobalUserVar[Coins;0;$authorID]
$setGlobalUserVar[ATK;1;$authorID]
$endif

$if[$randomText[Animal;Animal;Animal;hpLoss]==hpLoss]
$title[1;Hunting]
$description[1;You go hunting.\nThe animal attacks you! You lose $getVar[Heart]$random[25;30].\nYou now have $getVar[Heart]**$getGlobalUserVar[HP;$authorID]/$getGlobalUserVar[MaxHP;$authorID]**.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[HP;$sub[$getGlobalUserVar[HP;$authorID];$random[25;30]];$authorID]

$else
$title[1;Hunting]
$description[1;You go hunting.\nYou find: a **$randomText[fox;deer;moose;rabbit]**!]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$if[$getGlobalUserVar[BoughtBait;$authorID]==False]
$setGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$sum[$getGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$authorID];1];$authorID]
$else
$setGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$sum[$getGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$authorID];2];$authorID]
$footer[1;Bait active. Double the animals.]
$endif
$endif

$globalCooldown[20s;Please wait **%time%** before running this command again.]
`
},

{
name: "sellanimals",
aliases: ["sell animal", "sell animals", "sellanimal"],
code: `
$setGlobalUserVar[foxStock;0;$authorID]
$setGlobalUserVar[deerStock;0;$authorID]
$setGlobalUserVar[mooseStock;0;$authorID]
$setGlobalUserVar[rabbitStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$sum[$multi[$getGlobalUserVar[foxStock;$authorID];50];$multi[$getGlobalUserVar[deerStock;$authorID];75];$multi[$getGlobalUserVar[mooseStock;$authorID];100];$multi[$getGlobalUserVar[rabbitStock;$authorID];125]]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[foxStock] Foxes**
**$getGlobalUserVar[deerStock] Deer**
**$getGlobalUserVar[mooseStock] Moose**
**$getGlobalUserVar[rabbitStock] Rabbits**
For: $getVar[Coi]**$sum[$multi[$getGlobalUserVar[foxStock;$authorID];50];$multi[$getGlobalUserVar[deerStock;$authorID];75];$multi[$getGlobalUserVar[mooseStock;$authorID];100];$multi[$getGlobalUserVar[rabbitStock;$authorID];125]]**
$onlyIf[$isBot[$authorID]!=true;]
$onlyIf[$sum[$multi[$getGlobalUserVar[foxStock;$authorID];50];$multi[$getGlobalUserVar[deerStock;$authorID];75];$multi[$getGlobalUserVar[mooseStock;$authorID];100];$multi[$getGlobalUserVar[rabbitStock];125]]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{
name: "sell fox",
aliases: ["sellfox", "sell foxes", "sellfoxes"],
$if: "v4",
code: `
$if[$message==all]
$setGlobalUserVar[foxStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[foxStock;$authorID];50]]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[foxStock] Foxes**
For: $getVar[Coi]**$multi[$getGlobalUserVar[foxStock;$authorID];50]**
$else

$setGlobalUserVar[foxStock;$sub[$getGlobalUserVar[foxStock;$authorID];$message]];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[foxStock;$authorID];50]]];$authorID]
$wait[1s]
You sold:
**$message Foxes**
For: $getVar[Coi]**$multi[$message;50]**
$endif

$onlyIf[$getGlobalUserVar[foxStock;$authorID]>=$message;You don't have that many foxes to sell.]
$onlyIf[$getGlobalUserVar[foxStock;$authorID]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{
name: "sell deer",
aliases: ["selldeer", "sell deers", "selldeers"],
$if: "v4",
code: `
$if[$message==all]
$setGlobalUserVar[deerStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[deerStock;$authorID];75]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[deerStock] Deer**
For: $getVar[Coi]**$multi[$getGlobalUserVar[deerStock;$authorID];75]**
$else

$setGlobalUserVar[deerStock;$sub[$getGlobalUserVar[deerStock;$authorID];$message]];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[deerStock;$authorID];75]]];$authorID]
$wait[1s]
You sold:
**$message Deer**
For: $getVar[Coi]**$multi[$message;75]**
$endif

$onlyIf[$getGlobalUserVar[deerStock;$authorID]>=$message;You don't have that many deer to sell.]
$onlyIf[$getGlobalUserVar[deerStock;$authorID]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{ // I wonder if anyone actually spells it "meese".
name: "sell moose",
aliases: ["sellmoose", "sell mooses", "sellmooses", "sellmeese", "sell meese"],
$if: "v4",
code: `
$if[$message==all]
$setGlobalUserVar[mooseStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[mooseStock;$authorID];100]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[mooseStock] Moose**
For: $getVar[Coi]**$multi[$getGlobalUserVar[mooseStock;$authorID];100]**
$else
$setGlobalUserVar[mooseStock;$sub[$getGlobalUserVar[mooseStock;$authorID];$message]];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[mooseStock;$authorID];100]]];$authorID]
$wait[1s]
You sold:
**$message Moose**
For: $getVar[Coi]**$multi[$message;100]**
$endif
$onlyIf[$getGlobalUserVar[mooseStock;$authorID]>=$message;You don't have that many moose to sell.]
$onlyIf[$getGlobalUserVar[mooseStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{
name: "sell rabbit",
aliases: ["sellrabbit", "sell rabbits", "sellrabbits"],
$if: "v4",
code: `
$if[$message==all]
$setGlobalUserVar[rabbitStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[rabbitStock;$authorID];125]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[rabbitStock] Rabbits**
For: $getVar[Coi]**$multi[$getGlobalUserVar[rabbitStock;$authorID];125]**
$else
$setGlobalUserVar[rabbitStock;$sub[$getGlobalUserVar[rabbitStock;$authorID];$message]];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[rabbitStock;$authorID];125]]];$authorID]
$wait[1s]
You sold:
**$message Rabbits**
For: $getVar[Coi]**$multi[$message;125]**
$endif
$onlyIf[$getGlobalUserVar[rabbitStock;$authorID]>=$message;You don't have that many rabbits to sell.]
$onlyIf[$getGlobalUserVar[rabbitStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
}]