module.exports = {
name: "uptime",
aliases: ["upt", "up"],
code: `My uptime is: \`$uptime\`

$globalCooldown[10s;
{newEmbed:
{title:Slow down $username[$authorID]!}
{description:You can use \`uptime\` again in **%sec%s**.}
{color:#ff2050}}]`
}