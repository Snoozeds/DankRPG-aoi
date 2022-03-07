module.exports = {
	name: "whois",
	aliases: "wi",
	code: `

	$if[$isBoosting[$findUser[$message;yes]]==false]
	$description[
	\`$username[$findUser[$message;yes]]#$discriminator[$findUser[$message;yes]] ($userID[$username[$findUser[$message;yes]]])\`
	:bust_in_silhouette: **Highest Role:** <@&$highestRole[$findUser[$message;yes]]>
	<:Arrow_Right_Green:915175740947972097> **Joined Discord:** <t:$djsEval[var unixTimestamp = Math.floor(new Date("$creationDate[$findUser[$message;yes]]").getTime()/1000);unixTimestamp;yes]> (<t:$djsEval[var unixTimestamp = Math.floor(new Date("$creationDate[$findUser[$message;yes]]").getTime()/1000);unixTimestamp;yes]:R>)
	:door: **Joined Server:** <t:$djsEval[var unixTimestamp = Math.floor(new Date("$memberJoinedDate[$findUser[$message;yes];date]").getTime()/1000);unixTimestamp;yes]> (<t:$djsEval[var unixTimestamp = Math.floor(new Date("$memberJoinedDate[$findUser[$message;yes];date]").getTime()/1000);unixTimestamp;yes]:R>)
	]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]	
	
	$else
	$description[
	\`$username[$findUser[$message;yes]]#$discriminator[$findUser[$message;yes]] ($userID[$username[$findUser[$message;yes]]])\`
	:bust_in_silhouette: **Highest Role:** <@&$highestRole[$findUser[$message;yes]]>
	<:Boosted:917749329295454238> **Boosting Since:** <t:$djsEval[var unixTimestamp = Math.floor(new Date("$boostingSince[$findUser[$message;yes]]").getTime()/1000);unixTimestamp;yes]> (<t:$djsEval[var unixTimestamp = Math.floor(new Date("$boostingSince[$findUser[$message;yes]]").getTime()/1000);unixTimestamp;yes]:R>)
	<:Arrow_Right_Green:915175740947972097> **Joined Discord:** <t:$djsEval[var unixTimestamp = Math.floor(new Date("$creationDate[$findUser[$message;yes]]").getTime()/1000);unixTimestamp;yes]> (<t:$djsEval[var unixTimestamp = Math.floor(new Date("$creationDate[$findUser[$message;yes]]").getTime()/1000);unixTimestamp;yes]:R>)
	:door: **Joined Server:** <t:$djsEval[var unixTimestamp = Math.floor(new Date("$memberJoinedDate[$findUser[$message;yes];date]").getTime()/1000);unixTimestamp;yes]> (<t:$djsEval[var unixTimestamp = Math.floor(new Date("$memberJoinedDate[$findUser[$message;yes];date]").getTime()/1000);unixTimestamp;yes]:R>)
	]
	$color[$getGlobalUserVar[EmbedColor;$authorID]]
	$suppressErrors[Cannot find user. Are they in this server?]
	$endif
	$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
	$suppressErrors[Cannot find user. Are they in this server?]
	$onlyIf[$isBot[$authorID]!=true;]
	`
	} 
	
/*
	To explain the unix timestamp (djsEval):
	We are getting the creationDate of the user by using an aoi.js function inside of the discord.js eval.. discovered that was possible myself.
	This returns the creationdate of the user, but in a string, such as: "10/10/2020, 7:08:12 PM" (Mine). I assume this is UTC/GMT.
	We convert this to unix time by getting the milliseconds of this date, and then dividing this by 1000. There you go!
	I think.. eh. Who needs maths anyways?

	If you'd like to see how to use timestamps in discord, you should read this gist: https://gist.github.com/LeviSnoot/d9147767abeef2f770e9ddcd91eb85aa
*/
