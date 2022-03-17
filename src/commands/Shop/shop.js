module.exports = {
	name: "shop",
	$if: "v4",
	code: `
	$title[1;Welcome to my shop!]
	$description[1;Here are my items on sale.\n\n<:hpDrop:915888646454927380> **__hpDrop__**\nIncreases your HP by 100. | <:RPGCoin:855767372534906920>**750**\n**In stock: ∞**\n$getServerVar[Prefix]buyhp\n
	$if[$getGlobalUserVar[HouseL;$authorID]==1]\n\n<:ItmHouse:921118526876577814> **__House__**\nAutomatically heals HP as you type. | **500 Wood**\n**In stock: $getGlobalUserVar[HouseL;$authorID]**\n$getServerVar[Prefix]buyhouse\n $endif
Other Shop commands:\n\`upgrade\`, \`hp\`, \`heal\`, \`petshop\`]
	$color[1;$getGlobalUserVar[EmbedColor]]
	$suppressErrors
	$onlyIf[$isBot[$authorID]!=true;]
	`
}
