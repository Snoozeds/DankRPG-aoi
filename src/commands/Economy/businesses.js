module.exports = [{
    name: "selectbusiness",
    aliases: ["bs", "sb", "businessselect"],
    code: `
    $if[$getGlobalUserVar[InBusiness;$authorID]==True]
You are already in a business.
$else
Type in chat which business you'd like to select. You can only change businesses every 24 hours.
\`\`\`1 - Taxi
2 - Hospital
3 - Ice Cream Shop (New!)\`\`\`
    $awaitMessages[$authorID;1m;1,2,3;Opt1,Opt2,Opt3;:x: Command timed out. Please try again.]
    $endif
    $suppressErrors
    $globalCooldown[24h;You need to wait **%time%**.]
    $onlyIf[$isBot[$authorID]!=true;]
    `
},

{
    name: "Opt1",
    type: "awaitedCommand",
    code: `Selected **Taxi**
    $setGlobalUserVar[BusinessType;Taxi;$authorID]
    $onlyIf[$isBot[$authorID]!=true;]`
},


{
    name: "Opt2",
    type: "awaitedCommand",
    code: `Selected **Hospital**
    $setGlobalUserVar[BusinessType;Hospital;$authorID]
    $onlyIf[$isBot[$authorID]!=true;]`
},


{
    name: "Opt3",
    type: "awaitedCommand",
    code: `Selected **Ice Cream Shop**
    $setGlobalUserVar[BusinessType;IceC;$authorID]
    $onlyIf[$isBot[$authorID]!=true;]`
},

{
    name: "bwork",
    aliases: "business work",
    code: `
    $if[$getGlobalUserVar[BusinessType]==None]
    $globalCooldown[10s]
    You do not have a business! Select one with \`$getServerVar[Prefix]selectbusiness\`

    $else
    $if[$getGlobalUserVar[BusinessType]==Taxi]
**MINIGAME:** Type $randomText[Drive;Taxi;Customer;Driver] in chat to earn your reward!
    $awaitMessages[$authorID;5s;$randomText[Drive;Taxi;Customer;Driver];TaxiR;:x: You didn't respond in time. You do not get paid.]
    $globalCooldown[30m;You need to wait **%time%**.]
    
    $else
    $if[$getGlobalUserVar[BusinessType]==Hospital]
    $if[$getGlobalUserVar[HP]>=$checkCondition[$sum[$getGlobalUserVar[MaxHP];$random[1;10]]]==true]
You earned <:RPGCoin:855767372534906920>**$random[25;50]** at work.
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[25;50]];$authorID]
$else
You earned <:RPGCoin:855767372534906920>**$random[25;50]** at work and got healed <:RPGHeart:855755205102534686>**$random[1;10]**.
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[25;50]];$authorID]
$setGlobalUserVar[HP;$sum[$getGlobalUserVar[HP];$random[1;10]];$authorID]
$globalCooldown[30m;You need to wait **%time%**.]
    
    $else
    $if[$getGlobalUserVar[BusinessType]==IceC]
**MINIGAME:** A customer wants a **$randomText[strawberry;chocolate;mint;vanilla]** ice cream! Type $randomText[strawberry;chocolate;mint;vanilla] in chat to earn your reward.
$awaitMessages[$authorID;5s;$randomText[strawberry;chocolate;mint;vanilla];IceC;:x: You didn't respond in time. You do not get paid.]
$globalCooldown[30m;You need to wait **%time%**.]

    $else
    $endif
    $endif
    $endif
    $endif
    $endif
    $onlyIf[$isBot[$authorID]!=true;]
    `
},

{
    name: "TaxiR",
    type: "awaitedCommand",
    code: `Congrats on responding in time! You earned <:RPGCoin:855767372534906920>**$random[50;75]**.
    $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[50;75]];$authorID]
    $onlyIf[$isBot[$authorID]!=true;]
    `
},


{
    name: "IceC",
    type: "awaitedCommand",
    code: `Congrats on responding in time! You earned <:RPGCoin:855767372534906920>**$random[60;85]**.
    $setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins];$random[60;85]];$authorID]
    $onlyIf[$isBot[$authorID]!=true;]
    `
},


]