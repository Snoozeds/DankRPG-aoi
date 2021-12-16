module.exports = {
	name: "shop",
	code: `
	$title[Welcome to my shop!]
	$description[Here are my items on sale.\n\n<:hpDrop:915888646454927380> **__hpDrop__**\nIncreases your HP by 100. | <:RPGCoin:855767372534906920>**750**\n$getServerVar[Prefix]buyhp\n\n
	<:ItmHouse:921118526876577814> **__House__**\nAutomatically heals HP as you type. | **500 Wood**\n$getServerVar[Prefix]buyhouse\n\n
Other Shop commands:\n\`upgrade\`, \`heal\`]
	$color[$getGlobalUserVar[EmbedColor]]
	$suppressErrors
	`
}
