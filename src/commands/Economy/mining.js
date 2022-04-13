module.exports = [{
name: "mine",
code: `
$channelSendMessage[$channelID;<@$authorID>\nYou mined:\n  $getVar[StoneEmoji]**$random[10;20]** Stone\n $getVar[GoldEmoji]**$random[5;10]** Gold\n $getVar[DiamondEmoji]**$random[1;5]** Diamond(s)]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$authorID];$random[1;5]];$authorID]
$setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[10;20]];$authorID]
$wait[$getGlobalUserVar[MiningTime;$authorID]]
$channelSendMessage[$channelID;You have started mining. Come back in $getGlobalUserVar[MiningTime;$authorID] to see what you have mined.]
$globalCooldown[$sum[$getGlobalUserVar[MiningTime;$authorID];5m];You have already mined recently, please wait **%time%**.]
$onlyIf[$isBot[$authorID]!=true;]
`
},
// Yes I am too lazy to make unique emoji shhh

{
name: "sellall",
$if: "v4",
code: `
$setGlobalUserVar[Gold;0;$authorID]
$setGlobalUserVar[Diamond;0;$authorID]
$setGlobalUserVar[Stone;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$sum[$multi[$getGlobalUserVar[Stone;$authorID];5];$multi[$getGlobalUserVar[Gold;$authorID];30];$multi[$getGlobalUserVar[Diamond;$authorID];40]]];$authorID]
$wait[1s]
You sold:
$getVar[DiamondEmoji]**$getGlobalUserVar[Diamond]**
$getVar[GoldEmoji]**$getGlobalUserVar[Gold]**
$getVar[StoneEmoji]**$getGlobalUserVar[Stone]**
For: $getVar[Coi]**$sum[$multi[$getGlobalUserVar[Stone;$authorID];5];$multi[$getGlobalUserVar[Gold;$authorID];30];$multi[$getGlobalUserVar[Diamond;$authorID];40]]**
$onlyIf[$isBot[$authorID]!=true;]
$onlyIf[$sum[$multi[$getGlobalUserVar[Stone;$authorID];5];$multi[$getGlobalUserVar[Gold;$authorID];30];$multi[$getGlobalUserVar[Diamond;$authorID];40]]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$endif
$suppressErrors[Something went wrong. You probably have nothing to sell.]
`
}] // I add a wait to this one because otherwise it'll say that you sold 0 of everything... idk, aoi.js is weird.
