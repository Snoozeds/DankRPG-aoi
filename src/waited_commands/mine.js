module.exports = {
name: "mine",
aliases: ["m"],
$if: "v4",
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
{color:#ff2050}}]
`}