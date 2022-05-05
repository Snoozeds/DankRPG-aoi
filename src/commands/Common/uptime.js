module.exports = {
name: "uptime",
aliases: "upt",
code: `My uptime is: \`$uptime\`

$if[$authorID!=$getVar[ownid]]
$globalCooldown[10s;You don't need to check my uptime THAT much... (**%time%**)]
$endif`
}