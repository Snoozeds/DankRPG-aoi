module.exports = {
name: "uptime",
aliases: ["upt", "up"],
category: "Misc",
description: "Shows the bot's uptime.",
usage: "N/A",
code: `My uptime is: \`$uptime\`

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`uptime\` again in **%sec%s**.}
{color:#ff2050}}]`
}