module.exports = [{
name: "mine",
$if: "v4",
code: `
$if[$getGlobalUserVar[MiningTime;$authorID]==10m]
$channelSendMessage[$channelID;<@$authorID>\nYou mined:\n  $getVar[StoneEmoji]**$random[10;20]** Stone\n $getVar[GoldEmoji]**$random[5;10]** Gold\n $getVar[DiamondEmoji]**$random[1;5]** Diamond(s)]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$authorID];$random[1;5]];$authorID]
$setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[10;20]];$authorID]
$wait[10m]
$channelSendMessage[$channelID;You have started mining. Come back in $getGlobalUserVar[MiningTime;$authorID] to see what you have mined.\n> To make your mining faster, you can now buy a pickaxe. \`$getServerVar[Prefix]shop\`]

$else
$if[$getGlobalUserVar[MiningTime;$authorID]==5m]
$channelSendMessage[$channelID;<@$authorID>\nYou mined:\n  $getVar[StoneEmoji]**$random[10;20]** Stone\n $getVar[GoldEmoji]**$random[5;10]** Gold\n $getVar[DiamondEmoji]**$random[1;5]** Diamond(s)]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$authorID];$random[1;5]];$authorID]
$setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[10;20]];$authorID]
$wait[5m]
$channelSendMessage[$channelID;You have started mining. Come back in $getGlobalUserVar[MiningTime;$authorID] to see what you have mined.]
$endif
$endif

$globalCooldown[$sum[$replaceText[$getGlobalUserVar[MiningTime;$authorID];m; ;-1];5]m;You have already mined recently, please wait **%time%**.]
`
},
// Yes I am too lazy to make unique emoji shhh

{
name: "sell diamond",
aliases: ["selldiamond", "sell diamonds", "selldiamonds"],
$if: "v4",
code: `
$setGlobalUserVar[Diamond;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[Diamond;$authorID];30]];$authorID]
$wait[1s]
You sold:
$getVar[DiamondEmoji]**$getGlobalUserVar[Diamond]**
For: $getVar[Coi]**$multi[$getGlobalUserVar[Diamond;$authorID];30]**
$onlyIf[$getGlobalUserVar[Diamond]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$suppressErrors[Something went wrong. You probably have nothing to sell.]
`
},

{
name: "sell gold",
aliases: ["sellgold", "sell gold"],
$if: "v4",
code: `
$setGlobalUserVar[Gold;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[Gold;$authorID];20]];$authorID]
$wait[1s]
You sold:
$getVar[GoldEmoji]**$getGlobalUserVar[Gold]**
For: $getVar[Coi]**$multi[$getGlobalUserVar[Gold;$authorID];20]**
$onlyIf[$getGlobalUserVar[Gold]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$suppressErrors[Something went wrong. You probably have nothing to sell.]
`
},

{
name: "sell stone",
aliases: ["sellstone", "sellstones", "sell stones"],
$if: "v4",
code: `
$setGlobalUserVar[Stone;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[Stone;$authorID];3]];$authorID]
$wait[1s]
You sold:
$getVar[StoneEmoji]**$getGlobalUserVar[Stone]**
For: $getVar[Coi]**$multi[$getGlobalUserVar[Stone;$authorID];3]**
$onlyIf[$getGlobalUserVar[Stone]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$suppressErrors[Something went wrong. You probably have nothing to sell.]
`
}
] 