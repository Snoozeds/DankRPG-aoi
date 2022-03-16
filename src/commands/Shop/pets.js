module.exports = [{
name: "petshop",
aliases: "shop pet",
code: `$title[Pet Shop]
$description[Welcome to the pet shop $username! Here's what we have. $addField[Dog;Increases your MaxHP by **125**.\nPrice: $getVar[Coi]**750**]
$addField[Cat;Has a chance to find $getVar[Coi] while you run commands\nPrice: $getVar[Coi]**1000**]]
$footer[d!buypet <opt>]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]`
},

{
name: "buypet",
aliases: "buy pet",
code: `
$if[$message==cat]
$title[You bought a cat!]
$description[Enjoy your new furry friend.]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[https://i.ibb.co/sFrm0HH/cat.png]
$setGlobalUserVar[HasPet;true;$authorID]
$setGlobalUserVar[PetType;cat;$authorID]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];1000];$authorID]
$setGlobalUserVar[PetIMG;https://i.ibb.co/sFrm0HH/cat.png;$authorID]
$onlyIf[$getGlobalUserVar[Coins;$authorID]>999;You do not have enough $getVar[Coi] for a cat.]
$endif

$if[$message==dog]
$title[You bought a dog!]
$description[Enjoy your new furry friend.]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[https://i.ibb.co/brt0Q3j/dog.png]
$setGlobalUserVar[HasPet;true;$authorID]
$setGlobalUserVar[PetType;dog;$authorID]
$setGlobalUserVar[Coins;$sub[$getGlobalUserVar[Coins;$authorID];750];$authorID]
$setGlobalUserVar[MaxHP;$sum[$getGlobalUserVar[MaxHP;$authorID];125];$authorID]
$setGlobalUserVar[PetIMG;https://i.ibb.co/brt0Q3j/dog.png;$authorID]
$onlyIf[$getGlobalUserVar[Coins;$authorID]>749;You do not have enough $getVar[Coi] for a dog.]
$endif

$onlyIf[$getUserVar[HasPet]!=true;:x: You already have a pet. Run \`$getServerVar[Prefix]abandon\` to abandon it.]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]
`
},

{
name: "pet info",
aliases: "petinfo",
code: `
$title[Your pet $getGlobalUserVar[PetType;$authorID]]
$description[
$addField[Name;$getGlobalUserVar[PetName;$authorID]]
$addField[Type;$getGlobalUserVar[PetType;$authorID]]
]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$footer[$username's pet]
$thumbnail[$getGlobalUserVar[PetIMG]]
$onlyIf[$getGlobalUserVar[HasPet;$authorID]!=false;:x: You do not have a pet. See: \`$getServerVar[Prefix]petshop\`]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]
`
},

{
name: "namepet",
aliases: ["name pet", "petname", "pet name"],
code: `
Named your pet to $message.
$setGlobalUserVar[PetName;$message;$authorID]
$onlyIf[$charCount[$message]<16;Please make your pet's name less than 16 characters.]
$onlyIf[$getGlobalUserVar[HasPet;$authorID]!=false;:x: You do not have a pet. See: \`$getServerVar[Prefix]petshop\`]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]`
},

{
name: "abandon",
code:`Are you sure you want to abandon your pet? You can only do this once a day!\nPlease type 'yes' below, or wait for the command to run out of time.
$awaitMessages[$authorID;15s;yes;AbandonYes;Response timed out. **Your pet has not been abandoned**.]
$globalCooldown[5s;Please stop spamming commands, ty :upside_down:]
$onlyIf[$isBot[$authorID]!=true;]
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];You are blacklisted.]`
},

{
name: "AbandonYes",
type: "awaitedCommand",
code: `
You have abandoned your pet. It's name has been reset, and you can no longer access pet commands, until you buy a new pet.
$setGlobalUserVar[HasPet;false;$authorID]
$setGlobalUserVar[PetType;none;$authorID]
$setGlobalUserVar[PetName;Your pet hasn't been named yet. Run \`<prefix>petname <name>\`;$authorID]
$globalCooldown[1d;You have already abandoned another pet today. Please come back in **%time%**.]
$if[$getGlobalUserVar[PetType;$authorID]==dog]
$setGlobalUserVar[MaxHP;$sub[$getGlobalUserVar[MaxHP;$authorID];125];$authorID]
$endif
$onlyIf[$isBot[$authorID]!=true;]
`
},

{
name: "$alwaysExecute",
code: `
$if[$getGlobalUserVar[CatNotificationsOn;$authorID]==False]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[25;50]];$authorID]
$elseIf[$randomText[yes;no;no;no]==yes]
$description[Your cat found you $getVar[Coi] **$random[25;50]!**]
$footer[To turn off these notifications run: "$getServerVar[Prefix]catnotif false"]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$thumbnail[$getGlobalUserVar[PetIMG;$authorID]]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$authorID];$random[25;50]];$authorID]
$endelseIf
$endif
$onlyIf[$getGlobalUserVar[PetType;$authorID]!=dog;]
$onlyIf[$getGlobalUserVar[PetType;$authorID]!=none;]
$onlyIf[$checkContains[$message;$getServerVar[Prefix;$guildID]]!=false;]
$globalCooldown[45s;]
$onlyIf[$isBot[$authorID]!=true;]
$suppressErrors
$blackListIDs[$replaceText[$getVar[BlacklistedUsers];+;\;;-1];]
`
}

]
