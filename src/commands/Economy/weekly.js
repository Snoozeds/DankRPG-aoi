module.exports = {
    name: "weekly",
    code: `$if[$checkContains[$httpRequest[https://normal-api.ml/topgg/hasvoted?bot=$clientID&user=$authorID&token=$getVar[TopggToken]];true]!=true]
    $title[Unfortunately, you haven't voted.]
    $description[<:tggfail:924458621440495658> Using the 'weekly' command requires you to vote for us on top.gg.
This only takes a couple of seconds and helps support us. [vote](https://top.gg/bot/855479925863481345/vote)
**Your rewards for voting:**
+$getVar[Coi]**1000**]
    $footer[Our privacy policy applies to this command: https://dankrpg.xyz/privacy]
    $color[$getGlobalUserVar[EmbedColor;$authorID]]
    $else
    Thank you for voting! Your support helps the bot grow :)
+$getVar[Coi]**1000**
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];1000];$authorID]
$globalCooldown[7d;You can only claim your voting rewards every week. You need to wait **%time%**.]
    $endif`
}
