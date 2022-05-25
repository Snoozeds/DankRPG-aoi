module.exports = [{
name: "marry",
code: `
$setGlobalUserVar[Sender;;$findUser[$message;no]]
$wait[12h]

$suppressErrors[Please mention someone to marry correctly.]
$setGlobalUserVar[Sender;$authorID;$findUser[$message;no]]

$channelSendMessage[$channelID;**$username[$findUser[$message;no]]**:\n$username[$authorID] wants to marry you... do you accept?\n(to accept, type \`$getServerVar[Prefix]accept\`)]

$onlyIf[$memberExists[$findUser[$message;no]]!=false;User is not in this server, or you didn't mention someone properly.]
$onlyIf[$message!=;Please mention a user to marry.]
$onlyIf[$getGlobalUserVar[InRelationship;$findUser[$message;no]]!=True;This user is already in a relationship...]
$onlyIf[$getGlobalUserVar[InRelationship;$authorID]!=True;You are in a relationship... :face_with_raised_eyebrow:]
$onlyIf[$findUser[$message;no]!=$authorID;Yes, we all wish this was possible, but is it? No.]
$onlyIf[$isBot[$findUser[$message;yes]]!=true;Wow, even a bot doesn't want to marry you.]
$onlyIf[$memberExists[$findUser[$message;no]]!=false;User is not in this server. Try again.]
$onlyIf[$findUser[$message;no]!=855479925863481345;<:ew:937451020534034525>]
$globalCooldown[3s;]
`
},

{
name: "accept",
code: `
$channelSendMessage[$channelID;<@$getGlobalUserVar[Sender;$authorID]> is now married to <@$authorID>!]
    
$setGlobalUserVar[InRelationship;True;$authorID]
$setGlobalUserVar[InRelationship;True;$getGlobalUserVar[Sender;$authorID]]
$setGlobalUserVar[MarriedTo;$authorID;$getGlobalUserVar[Sender;$authorID]]
$setGlobalUserVar[MarriedTo;$getGlobalUserVar[Sender;$authorID];$authorID]
$setGlobalUserVar[MarriageDate;$round[$divide[$dateStamp;1000]];$authorID]
$setGlobalUserVar[MarriageDate;$round[$divide[$dateStamp;1000]];$getGlobalUserVar[Sender;$authorID]]
$onlyIf[$getGlobalUserVar[Sender;$authorID]!=;Nothing to accept.]
$onlyIf[$getGlobalUserVar[InRelationship;$getGlobalUserVar[Sender;$authorID]]!=True;The sender is already married.]
$onlyIf[$getGlobalUserVar[InRelationship;$authorID]!=True;You are already married.]
`
},

{
name: "marriage",
aliases: ["marriageinfo"],
code: `
$title[1;🌸 | Marriage info: $nickname[$findUser[$message;yes]]]
$color[1;$getGlobalUserVar[EmbedColor;$authorID]]
$description[1;<@$findUser[$message;yes]> is married to: <@$getGlobalUserVar[MarriedTo;$findUser[$message;yes]]>\nMarried since: <t:$getGlobalUserVar[MarriageDate;$findUser[$message;yes]]:R>]
$thumbnail[1;$userAvatar[$findUser[$message;yes]]]
$onlyIf[$getGlobalUserVar[InRelationship;$findUser[$message;yes]]!=False;This user is not married.]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]
$onlyIf[$isBot[$findUser[$message;yes]]!=true;Bots marrying people... hmm.]
$globalCooldown[10s;Please don't spam commands.]
$onlyIf[$isBot[$authorID]!=true;]
`
},

{
name: "divorce",
code: `
You divorced.
$setGlobalUserVar[InRelationship;False;$authorID]
$setGlobalUserVar[InRelationship;False;$findUser[$message;no]]
$setGlobalUserVar[MarriedTo;;$findUser[$message;no]]
$setGlobalUserVar[MarriedTo;;$authorID]
$setGlobalUserVar[MarriageDate;;$authorID]
$setGlobalUserVar[MarriageDate;;$findUser[$message;no]]
$setGlobalUserVar[Sender;;$findUser[$message;no]]
$setGlobalUserVar[Sender;;$authorID]
$onlyIf[$getGlobalUserVar[InRelationship;$authorID]!=False;You are NOT in a relationship... :face_with_raised_eyebrow:]
$onlyIf[$getGlobalUserVar[MarriedTo]==$findUser[$message;yes];You are not married to this person, weirdo.]
$onlyIf[$message!=;Mention someone to divorce]
$globalCooldown[5s;]
$onlyIf[$isBot[$authorID]!=true;]
`
}
]