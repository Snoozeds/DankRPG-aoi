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
$setGlobalUserVar[foxStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[foxStock;$authorID];50]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[foxStock] Foxes**
For: $getVar[Coi]**$multi[$getGlobalUserVar[foxStock;$authorID];50]**
$onlyIf[$getGlobalUserVar[foxStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{
name: "sell deer",
aliases: ["selldeer", "sell deers", "selldeers"],
$if: "v4",
code: `
$setGlobalUserVar[deerStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[deerStock;$authorID];75]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[deerStock] Deer**
For: $getVar[Coi]**$multi[$getGlobalUserVar[deerStock;$authorID];75]**
$onlyIf[$getGlobalUserVar[deerStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{ // I wonder if anyone actually spells it "meese".
name: "sell moose",
aliases: ["sellmoose", "sell mooses", "sellmooses", "sellmeese", "sell meese"],
$if: "v4",
code: `
$setGlobalUserVar[mooseStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[mooseStock;$authorID];100]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[mooseStock] Moose**
For: $getVar[Coi]**$multi[$getGlobalUserVar[mooseStock;$authorID];100]**
$onlyIf[$getGlobalUserVar[mooseStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{
name: "sell rabbit",
aliases: ["sellrabbit", "sell rabbits", "sellrabbits"],
$if: "v4",
code: `
$setGlobalUserVar[rabbitStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[rabbitStock;$authorID];125]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[rabbitStock] Rabbits**
For: $getVar[Coi]**$multi[$getGlobalUserVar[rabbitStock;$authorID];125]**
$onlyIf[$getGlobalUserVar[rabbitStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
}]