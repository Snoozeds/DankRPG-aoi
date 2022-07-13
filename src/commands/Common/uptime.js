module.exports = {
name: "uptime",
aliases: ["upt", "up"],
code: `My uptime is: \`$uptime\`
$globalCooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
$onlyIf[$isBot[$authorID]!=true;]`
}