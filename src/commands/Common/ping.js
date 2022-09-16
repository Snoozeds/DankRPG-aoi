module.exports = ({
name: "ping",
code: `**Websocket Ping**: \`$ping ms\`
**Database Ping:** \`$dbPing ms\`

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`ping\` again in **%sec%s**.}
{color:#ff2050}}]`,
})
