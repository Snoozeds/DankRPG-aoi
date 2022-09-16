module.exports = [{
name: "forage",
aliases: ["explore", "search"],
code: `$description[1;<@$authorID> goes foraging. They find: $randomText[Wood;Stone;Slime] (**$random[15;20]**)]
$setGlobalUserVar[$randomText[Wood;Stone;Slime];$sum[$getGlobalUserVar[$randomText[Wood;Stone;Slime]];$random[15;20]];$authorID]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`forage\` again in **%sec%s**.}
{color:#ff2050}}]
`
},

{
name: "sell wood",
$if: "v4",
aliases: ["sellwood"],
code: `$if[$message==all]
$setGlobalUserVar[Wood;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[Wood;$authorID];1]];$authorID]
$wait[1s]
You sold:
**$getGlobalUserVar[Wood]** wood.
For: $getVar[Coi]**$multi[$getGlobalUserVar[Wood;$authorID];1]**
$onlyIf[$getGlobalUserVar[Wood]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]forage\` to find some resources.]
$suppressErrors[Something went wrong. You probably have nothing to sell.]
$else
$setGlobalUserVar[Wood;$sub[$getGlobalUserVar[Wood;$authorID];$message];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message;1]];$authorID]
$wait[1s]
You sold:
**$message** wood.
For: $getVar[Coi]**$multi[$message;1]**
$onlyIf[$getGlobalUserVar[Wood]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]forage\` to find some resources.]
$onlyIf[$getGlobalUserVar[Wood]>=$message;You don't have that many wood to sell.]
$endif
$onlyIf[$message!=;Please specify how many you want to sell, with either \`all\` or a number.]`
},

{
name: "sell slime",
$if: "v4",
aliases: ["sellslime"],
code: `$if[$message==all]
$setGlobalUserVar[Slime;0;$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$getGlobalUserVar[Slime;$authorID];2]];$authorID]
$wait[1s]
You sold:
$getVar[SlimeEmoji]**$getGlobalUserVar[Slime]**
For: $getVar[Coi]**$multi[$getGlobalUserVar[Slime;$authorID];2]**
$onlyIf[$getGlobalUserVar[Slime]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]forage\` to find some resources.]
$suppressErrors[Something went wrong. You probably have nothing to sell.]
$else
$setGlobalUserVar[Slime;$sub[$getGlobalUserVar[Slime;$authorID];$message];$authorID]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$multi[$message;2]];$authorID]
$wait[1s]
You sold:
**$message** slime.
For: $getVar[Coi]**$multi[$message;2]**
$onlyIf[$getGlobalUserVar[Slime]!=0;You have nothing to sell. Try \`$getServerVar[Prefix;$guildID]forage\` to find some resources.]
$onlyIf[$getGlobalUserVar[Slime]>=$message;You don't have that much slime to sell.]
$endif
$onlyIf[$message!=;Please specify how many you want to sell, with either \`all\` or a number.]`
}

]
