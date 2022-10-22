module.exports = ({
name: "ping",
category: "Misc",
description: "Shows the bot's ping.",
usage: "N/A",
code: `**Websocket Ping**: \`$ping ms\`
**Database Ping:** \`$dbPing ms\`

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`ping\` again in **%sec%s**.}
{color:#ff2050}}]`,
})
