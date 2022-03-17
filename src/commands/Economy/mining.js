module.exports = [{
name: "mine",
code: `
$channelSendMessage[$channelID;<@$authorID>\nYou mined:\n  $getVar[StoneEmoji]**$random[10;20]** Stone\n $getVar[GoldEmoji]**$random[5;10]** Gold\n $getVar[DiamondEmoji]**$random[1;5]** Diamond(s)]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$authorID];$random[1;5]];$authorID]
$setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[10;20]];$authorID]
$wait[1h]
$channelSendMessage[$channelID;You have started mining. Come back in 1 hour to see what you have mined.]
$globalCooldown[2h;You have already mined recently, please wait **%time%**.]
$onlyIf[$isBot[$authorID]!=true;]
`
},
// Yes I am too lazy to make unique emoji shhh

/* 

I've decided to explain this a bit:
First, anything in this can only be sent as a message, unfortunately. Using an embed delays all of the code.
Anything above the 'wait' function gets delayed. This is useful for things like quests, missions, idle things (future idea?), etc. I decided to use it as a test for now.
- Snoozeds

*/

{
name: "sellall",
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
$suppressErrors[Something went wrong. You probably have nothing to sell.]
`
}] // I add a wait to this one because otherwise it'll say that you sold 0 of everything... idk, aoi.js is weird.
