module.exports = ({
    name: "ping",
    code: `My ping is \`$ping ms\`
    $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
		$suppressErrors`,
})
