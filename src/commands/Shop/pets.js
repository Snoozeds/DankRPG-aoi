module.exports = [{
name: "petshop",
aliases: "shop pet",
category: "Shop",
description: "Shows the pet shop.",
usage: "N/A",
code: `$title[1;Pet Shop]
$description[1;Welcome to the pet shop $username! Here's what we have. $addField[1;Dog;Increases your MaxHP by **125**.\nYou can have a MaxHP of 1200 with a fully upgraded pet.\nPrice: $getVar[Coi]**750**]
$footer[1;$getServerVar[Prefix;$guildID]buypet <opt> | Other commands: $getServerVar[Prefix;$guildID]petinfo, $getServerVar[Prefix;$guildID]petupgrade]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]`
},

{
name: "buypet",
aliases: ["buy pet"],
$if: "v4",
category: "Shop",
description: "Buys a pet.",
usage: "<pet>",
code: `
$if[$getGlobalUserVar[HasPet;$authorID]==true]
$title[1;You already have a pet!]
$description[1;You already have a pet. Run \`$getServerVar[Prefix]abandon\` to abandon it.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$endif

$if[$message==dog]
$title[1;You bought a dog!]
$description[1;Enjoy your new furry friend.]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;https://i.ibb.co/brt0Q3j/dog.png]
$setGlobalUserVar[HasPet;true;$authorID]
$setGlobalUserVar[PetType;dog;$authorID]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];750];$authorID]
$setGlobalUserVar[MaxHP;$sum[$getGlobalUserVar[MaxHP;$authorID];125];$authorID]
$onlyIf[$getGlobalUserVar[Coins;$authorID]>749;You do not have enough $getVar[Coi] for a dog.]
$endif
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]
`
},

{
name: "pet info",
aliases: ["petinfo", "pet", "pi"],
category: "Shop",
description: "Shows your pet's info.",
usage: "N/A",
code: `
$title[1;$getGlobalUserVar[PetName;$authorID]]
$description[1;
Pet type: Dog
]
$footer[1;Level: $getGlobalUserVar[PetLevel;$authorID]/2 | $getServerVar[Prefix;$guildID]petupgrade $replaceText[$replaceText[$checkCondition[$getGlobalUserVar[PetLevel]==2];true;;1];false;(500 Coins);1]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[1;https://i.ibb.co/brt0Q3j/dog.png]
$onlyIf[$getGlobalUserVar[HasPet;$authorID]!=false;:x: You do not have a pet. See: \`$getServerVar[Prefix]petshop\`]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]
`
},

{
name: "namepet",
aliases: ["name pet", "petname", "pet name"],
category: "Shop",
description: "Names your pet.",
usage: "<name>",
code: `
Named your pet to \`$message\`.
$setGlobalUserVar[PetName;$message;$authorID]
$onlyIf[$charCount[$message]<16;Please make your pet's name less than 16 characters.]
$onlyIf[$getGlobalUserVar[HasPet;$authorID]!=false;:x: You do not have a pet. See: \`$getServerVar[Prefix]petshop\`]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]`
},

{
name: "upgradepet",
aliases: ["petupgrade", "pet upgrade", "upgrade pet", "levelup pet", "leveluppet"],
category: "Shop",
description: "Upgrades your pet.",
usage: "N/A",
code: `
$title[1;Level Up!]
$description[1;
Your pet "$getGlobalUserVar[PetName;$authorID]" has leveled up for $getVar[Coi]500.
They are now level 2!
MaxHP +75
]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$setGlobalUserVar[MaxHP;$sum[$getGlobalUserVar[MaxHP;$authorID];75];$authorID]
$setGlobalUserVar[PetLevel;$sum[$getGlobalUserVar[PetLevel;$authorID];1];$authorID]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];500];$authorID]
$onlyIf[$getGlobalUserVar[PetLevelCost;$authorID]<$getGlobalUserVar[Coins;$authorID];:x: You do not have enough $getVar[Coi] for this level up. You need $getVar[Coi]**$getGlobalUserVar[PetLevelCost;$authorID]**.]
$onlyIf[$getGlobalUserVar[PetLevel;$authorID]!=2;You already have the highest level of your pet.]
`
}
]
