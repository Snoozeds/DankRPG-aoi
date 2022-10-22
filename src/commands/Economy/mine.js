module.exports = [

{
name: "mine",
aliases: ["m"],
$if: "v4",
category: "Economy",
description: "Mines for minerals.",
usage: "N/A",
code: `
$if[$getGlobalUserVar[MiningTime;$authorID]==10m]
$channelSendMessage[$channelID;<@$authorID>\nYou mined:\n$getVar[StoneEmoji]**$random[10;20]** Stone\n$getVar[GoldEmoji]**$random[5;10]** Gold\n$getVar[DiamondEmoji]**$random[2;3]** Diamond(s)]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$authorID];$random[2;3]];$authorID]
$setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[10;20]];$authorID]
$wait[10m]
$channelSendMessage[$channelID;You have started mining. Come back in $getGlobalUserVar[MiningTime;$authorID] to see what you have mined.]

$else
$if[$getGlobalUserVar[MiningTime;$authorID]==5m]
$channelSendMessage[$channelID;<@$authorID>\nYou mined:\n$getVar[StoneEmoji]**$random[10;20]** Stone\n$getVar[GoldEmoji]**$random[5;10]** Gold\n$getVar[DiamondEmoji]**$random[2;3]** Diamonds]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$authorID];$random[2;3]];$authorID]
$setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[10;20]];$authorID]
$wait[5m]
$channelSendMessage[$channelID;You have started mining. Come back in $getGlobalUserVar[MiningTime;$authorID] to see what you have mined.]

$else
$if[$getGlobalUserVar[MiningTime;$authorID]==1m]
$channelSendMessage[$channelID;<@$authorID>\nYou mined:\n$getVar[StoneEmoji]**$random[10;20]** Stone\n$getVar[GoldEmoji]**$random[5;10]** Gold\n$getVar[DiamondEmoji]**$random[2;3]** Diamonds]
$setGlobalUserVar[Gold;$sum[$getGlobalUserVar[Gold;$authorID];$random[5;10]];$authorID]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$authorID];$random[2;3]];$authorID]
$setGlobalUserVar[Stone;$sum[$getGlobalUserVar[Stone;$authorID];$random[10;20]];$authorID]
$wait[1m]
$channelSendMessage[$channelID;You have started mining. Come back in $getGlobalUserVar[MiningTime;$authorID] to see what you have mined.]
$endif
$endif
$endif

$globalCooldown[$sum[$replaceText[$getGlobalUserVar[MiningTime;$authorID];m; ;-1];1]m;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`mine\` again in **%min%m %sec%s**.}
{color:#ff2050}}]`
},

{
name: "sell diamond",
aliases: ["selldiamond", "sell diamonds", "selldiamonds"],
$if: "v4",
category: "Economy",
description: "Sells diamonds.",
usage: "(optional: <amount>/\"all\")",
code: `
$if[$message==all]
$setGlobalUserVar[Diamond;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[Diamond;$authorID];100]];$authorID]
$wait[1s]
You sold:
$getVar[DiamondEmoji]**$getGlobalUserVar[Diamond]**
For: $getVar[Coi]**$multi[$getGlobalUserVar[Diamond;$authorID];100]**
$onlyIf[$getGlobalUserVar[Diamond]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$suppressErrors[Something went wrong. You probably have nothing to sell.]
$else
$setGlobalUserVar[Diamond;$sub[$getGlobalUserVar[Diamond;$authorID];$message];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message;100]];$authorID]
$wait[1s]
You sold:
$getVar[DiamondEmoji]**$message**
For: $getVar[Coi]**$multi[$message;30]**
$onlyIf[$getGlobalUserVar[Diamond]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$onlyIf[$getGlobalUserVar[Diamond]>=$message;You don't have that many diamonds to sell.]
$endif
$onlyIf[$message!=;Please specify how many you want to sell, with either \`all\` or a number.]
`
},

{
name: "sell gold",
aliases: ["sellgold", "sell gold"],
$if: "v4",
category: "Economy",
description: "Sells gold.",
usage: "(optional: <amount>/\"all\")",
code: `
$if[$message==all]
$setGlobalUserVar[Gold;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[Gold;$authorID];20]];$authorID]
$wait[1s]
You sold:
$getVar[GoldEmoji]**$getGlobalUserVar[Gold]**
For: $getVar[Coi]**$multi[$getGlobalUserVar[Gold;$authorID];20]**
$onlyIf[$getGlobalUserVar[Gold]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$suppressErrors[Something went wrong. You probably have nothing to sell.]
$else
$setGlobalUserVar[Gold;$sub[$getGlobalUserVar[Gold;$authorID];$message];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message;20]];$authorID]
$wait[1s]
You sold:
$getVar[GoldEmoji]**$message**
For: $getVar[Coi]**$multi[$message;20]**
$onlyIf[$getGlobalUserVar[Gold]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$onlyIf[$getGlobalUserVar[Gold]>=$message;You don't have that many gold to sell.]
$endif
$onlyIf[$message!=;Please specify how many you want to sell, with either \`all\` or a number.]
`
},

{
name: "sell stone",
aliases: ["sellstone", "sellstones", "sell stones"],
$if: "v4",
category: "Economy",
description: "Sells stone.",
usage: "(optional: <amount>/\"all\")",
code: `
$if[$message==all]
$setGlobalUserVar[Stone;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[Stone;$authorID];3]];$authorID]
$wait[1s]
You sold:
$getVar[StoneEmoji]**$getGlobalUserVar[Stone]**
For: $getVar[Coi]**$multi[$getGlobalUserVar[Stone;$authorID];3]**
$onlyIf[$getGlobalUserVar[Stone]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$suppressErrors[Something went wrong. You probably have nothing to sell.]
$else
$setGlobalUserVar[Stone;$sub[$getGlobalUserVar[Stone;$authorID];$message];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message;3]];$authorID]
$wait[1s]
You sold:
$getVar[StoneEmoji]**$message**
For: $getVar[Coi]**$multi[$message;3]**
$onlyIf[$getGlobalUserVar[Stone]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]mine\` to mine some resources.]
$onlyIf[$getGlobalUserVar[Stone]>=$message;You don't have that many stones to sell.]
$endif
$onlyIf[$message!=;Please specify how many you want to sell, with either \`all\` or a number.]
`
}
] 