module.exports = {
name: "vote",
code: `
$if[$httpRequest[https://top.gg/api/bots/$clientID/check?userId=$authorID;GET;;voted;;Authorization:$getVar[TopggToken]]==0]
$title[Thank you for being interested in voting!]
$description[Your rewards for voting are:\n\n$getVar[Coi]**100**\n$getVar[DiamondEmoji]**1** (worth $getVar[Coi]**40**)\n\nYou can vote [here](https://top.gg/bot/$clientID/vote)]
$footer[To claim your rewards, run $getServerVar[Prefix;$guildID]vote again! | Come back in 12 hours after voting again!]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$else
Thank you for voting. It helps the bot grow. You gained:
$getVar[Coi]**100**
$getVar[DiamondEmoji]**1**
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$authorID];1];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];100];$authorID]
$globalCooldown[12h;You have already claimed your voting rewards in the past 12 hours. (**%time%** left.)]
$endif`
}