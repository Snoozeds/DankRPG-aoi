module.exports = {
    name: "buypresent",
    aliases: "buygift",
    code: `You open a present. Inside, you find a note:\`\`\`Thank you for supporting Dank RPG throughout the year. Here's to a brand new (hopefully good) year.
    
- Dank RPG\`\`\`\n$getVar[Coi]**+250**
    $setGlobalUserVar[GiftL;0;$authorID]
    $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];250]]
    $onlyIf[$getGlobalUserVar[Coins;$authorID]>99;You do not have enough to buy this item.]
    $onlyIf[$getGlobalUserVar[GiftL]!=0;This item has run out of stock.]
    `
}
