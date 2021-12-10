module.exports = {
	name: "whois",
	aliases: "wi",
	code: `
	$description[
\`$username[$findUser[$message;yes]]#$discriminator[$findUser[$message;yes]] ($userID[$username[$findUser[$message;yes]]])\`
:bust_in_silhouette: **Highest Role:** <@&$highestRole[$findUser[$message;yes]]>
<:Boosted:917749329295454238> **Is boosting?** $isBoosting[$findUser[$message;yes]]
<:Arrow_Right_Green:915175740947972097> **Joined Server:** $memberJoinedDate[$findUser[$message;yes];date]
	]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$suppressErrors[Cannot find user. Are they in this server?]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
	
	`
}
