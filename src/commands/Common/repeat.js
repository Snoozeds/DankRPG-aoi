module.exports = {
name: "repeat",
aliases: ["say"],
code: `$title[1;Repeated message from $username[$authorID]:]
$description[1;\`$message\`]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$addTimestamp[1]
$onlyIf[$message!=;{newEmbed:{description: You need to provide a message to repeat.\n\`$getServerVar[Prefix;$guildID]repeat <message>\`}{color: #ff2050}}]

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`repeat\` again in **%sec%s**.}
{color:#ff2050}}]`
}