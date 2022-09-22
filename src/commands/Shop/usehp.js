module.exports = {
name: "usehp",
aliases: ["use hp"],
code: `
You used 1x **<:hppotion:1022298361702920353>HP Potion**.
Your HP is now **$getVar[Heart]$getGlobalUserVar[HP;$authorID]/$getGlobalUserVar[MaxHP;$authorID]**.
$setGlobalUserVar[HP;$getGlobalUserVar[MaxHP;$authorID];$authorID]
$setGlobalUserVar[HPPotion;$sub[$getGlobalUserVar[HPPotion;$authorID];1];$authorID]
$onlyIf[$getGlobalUserVar[HP;$authorID]!=$getGlobalUserVar[MaxHP;$authorID];Your HP is already full! Your HP Potion was __not__ used.]
$onlyIf[$getGlobalUserVar[HPPotion;$authorID]!=0;You don't have a HP Potion to use!]

$globalCooldown[5s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`bet\` again in **%sec%s**.}
{color:#ff2050}}]`
}