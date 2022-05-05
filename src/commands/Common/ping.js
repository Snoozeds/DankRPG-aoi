module.exports = ({
name: "ping",
code: `**Websocket Ping**: \`$ping ms\`
**Database Ping:** \`$dbPing ms\`

$if[$authorID!=$getVar[ownid]]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$endif`,
})
