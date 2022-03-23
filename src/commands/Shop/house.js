module.exports = [{
    name: "buyhouse",
    aliases: "buildhouse",
    code: `
    You bought a house for **500 Wood**
    $setGlobalUserVar[Wood;$sub[$getGlobalUserVar[Wood];500];$authorID]
    $setGlobalUserVar[BoughtHouse;True]
    $setGlobalUserVar[HouseL;0]
    $onlyIf[$getGlobalUserVar[Wood;$authorID]>499;You do not have enough **wood** to buy a **house**. You need at least **499 Wood**.]
    $onlyIf[$getGlobalUserVar[BoughtHouse]!=True;You already have a house smh]
    $onlyIf[$isBot[$authorID]!=true;]`
},

{
    name: "$alwaysExecute",
    code: `
    $setGlobalUserVar[HP;$sum[$getGlobalUserVar[HP];1]]
    $onlyIf[$getGlobalUserVar[BoughtHouse]==True;]
    $onlyIf[$getGlobalUserVar[HP]!=$sub[$getGlobalUserVar[MaxHP];1];]
    $onlyIf[$getGlobalUserVar[HP]!=$getGlobalUserVar[MaxHP];]
    $globalCooldown[5m;]
    $onlyIf[$isBot[$authorID]!=true;]
    $suppressErrors`
}

]