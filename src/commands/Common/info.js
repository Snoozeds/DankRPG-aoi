module.exports = ({
    name: "info",
    code: `
    $description[
        **__Bot Info__**
        Ping: $round[$ping]ms
        Uptime: $uptime
        Server Count: $serverCount \n
        **__Server Info__**
        RAM Usage: $round[$ram]MBs
        CPU Usage: $round[$cpu]%
    ]
    $color[#ffff]
    $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
		$suppressErrors`,
})
