module.exports = [{
name: "hunt",
aliases: ["hunting"],
$if: "v4",
code: `
$if[$randomText[Animal;Animal;Animal;Nothing]==Nothing]
$title[1;Hunting]
$description[1;<@!$authorID> goes hunting. They find: **Nothing!** Sucks to suck.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$else
$title[1;Hunting]
$description[1;<@!$authorID> goes hunting. They find: a **$randomText[fox;deer;moose;rabbit]**!]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$sum[$getGlobalUserVar[$randomText[fox;deer;moose;rabbit]Stock;$authorID];1];$authorID]
$endif

$globalCooldown[30s;Please wait **%time%** before running this command again.]
`
},

{
name: "sell fox",
aliases: ["sellfox", "sell foxes", "sellfoxes"],
$if: "v4",
code: `
$setGlobalUserVar[foxStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[foxStock;$authorID];100]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[foxStock] Foxes**
For: $getVar[Coi]**$multi[$getGlobalUserVar[foxStock;$authorID];100]**
$onlyIf[$getGlobalUserVar[foxStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{
name: "sell deer",
aliases: ["selldeer", "sell deers", "selldeers"],
$if: "v4",
code: `
$setGlobalUserVar[deerStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[deerStock;$authorID];150]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[deerStock] Deers**
For: $getVar[Coi]**$multi[$getGlobalUserVar[deerStock;$authorID];150]**
$onlyIf[$getGlobalUserVar[deerStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{ // I wonder if anyone actually spells it "meese".
name: "sell moose",
aliases: ["sellmoose", "sell mooses", "sellmooses", "sellmeese", "sell meese"],
$if: "v4",
code: `
$setGlobalUserVar[mooseStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[mooseStock;$authorID];200]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[mooseStock] Mooses**
For: $getVar[Coi]**$multi[$getGlobalUserVar[mooseStock;$authorID];200]**
$onlyIf[$getGlobalUserVar[mooseStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
},

{
name: "sell rabbit",
aliases: ["sellrabbit", "sell rabbits", "sellrabbits"],
$if: "v4",
code: `
$setGlobalUserVar[rabbitStock;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[rabbitStock;$authorID];250]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[rabbitStock] Rabbits**
For: $getVar[Coi]**$multi[$getGlobalUserVar[rabbitStock;$authorID];250]**
$onlyIf[$getGlobalUserVar[rabbitStock]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]hunt\` to hunt for animals.]
`
}]