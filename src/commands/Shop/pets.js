module.exports = [{
name: "petshop",
aliases: "shop pet",
code: `$title[1;Pet Shop]
$description[1;Welcome to the pet shop $username! Here's what we have. $addField[1;Dog;Increases your MaxHP by **125**.\nPrice: $getVar[Coi]**750**]
$footer[1;$getServerVar[Prefix;$guildID]buypet <opt>]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]`
},

{
name: "buypet",
aliases: ["buy pet"],
$if: "v4",
code: `
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
$onlyIf[$getGlobalUserVar[HasPet;$authorID]!=true;:x: You already have a pet. Run \`$getServerVar[Prefix]abandon\` to abandon it.]
$endif
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]
`
},

{
name: "pet info",
aliases: ["petinfo", "pet", "pi"],
code: `
$title[1;$getGlobalUserVar[PetName;$authorID]]
$description[1;
Pet type: Dog
]
$footer[1;Level: $getGlobalUserVar[PetLevel;$authorID]/2 | $getServerVar[Prefix;$guildID]petupgrade]
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
code: `
Named your pet to \`$message\`.
$setGlobalUserVar[PetName;$message;$authorID]
$onlyIf[$charCount[$message]<16;Please make your pet's name less than 16 characters.]
$onlyIf[$getGlobalUserVar[HasPet;$authorID]!=false;:x: You do not have a pet. See: \`$getServerVar[Prefix]petshop\`]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]`
},

{
name: "abandon",
$if: "v4",
code:`You have abandoned your pet. It's name has been reset, and you can no longer access pet commands, until you buy a new pet.
$setGlobalUserVar[HasPet;false;$authorID]
$setGlobalUserVar[PetType;none;$authorID]
$setGlobalUserVar[PetName;Your pet hasn't been named yet. Run \`<prefix>petname <name>\`;$authorID]
$globalCooldown[1d;You have already abandoned another pet today. Please come back in **%time%**.]
$if[$getGlobalUserVar[PetType;$authorID]==dog]
$setGlobalUserVar[MaxHP;$sub[$getGlobalUserVar[MaxHP;$authorID];125];$authorID]
$endif
`
},

{
name: "upgradepet",
aliases: ["petupgrade", "pet upgrade", "upgrade pet", "levelup pet", "leveluppet"],
code: `
$title[1;Level Up!]
$description[1;
Your pet \`$getGlobalUserVar[PetName;$authorID]\` has leveled up!
They are now level 2.
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
