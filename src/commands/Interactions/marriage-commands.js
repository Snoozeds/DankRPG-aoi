module.exports = [{
name: "marry",
code: `
$suppressErrors[Please mention someone to marry correctly.]
$setGlobalUserVar[Sender;$authorID;$findUser[$message;no]]

$reactionCollector[$splitText[1];$findUser[$message;no];24h;$getVar[AcceptEmoji];Marriage_Accept;yes]
$textSplit[$sendMessage[<@$findUser[$message;no]>, <@$authorID> wants to marry you.\nDo you accept?\n(to deny, ignore this message.);yes]; ]
$onlyIf[$memberExists[$findUser[$message;no]]!=false;User is not in this server, or you didn't mention someone properly.]
$onlyIf[$message!=;Please mention a user to marry.]
$onlyIf[$getGlobalUserVar[InRelationship;$findUser[$message;no]]!=True;This user is already in a relationship...]
$onlyIf[$getGlobalUserVar[InRelationship;$authorID]!=True;You are in a relationship... :face_with_raised_eyebrow:]
$onlyIf[$findUser[$message;no]!=$authorID;Yes, we all wish this was possible, but is it? No.]
$onlyIf[$isBot[$findUser[$message;yes]]!=true;Wow, even a bot doesn't want to marry you.]
$globalCooldown[3s;]
`
},

{
name: "Marriage_Accept",
type: "awaitedCommand",
code: `
$title[New marriage]
$color[$getGlobalUserVar[EmbedColor];$authorID]
$description[<@$getGlobalUserVar[Sender;$authorID]> is now married to <@$authorID>!]

$setGlobalUserVar[InRelationship;True;$authorID]
$setGlobalUserVar[InRelationship;True;$getGlobalUserVar[Sender;$authorID]]
$setGlobalUserVar[MarriedTo;$authorID;$getGlobalUserVar[Sender;$authorID]]
$setGlobalUserVar[MarriedTo;$getGlobalUserVar[Sender;$authorID];$authorID]
$setGlobalUserVar[MarriageDate;$round[$divide[$dateStamp;1000]];$authorID]
$setGlobalUserVar[MarriageDate;$round[$divide[$dateStamp;1000]];$getGlobalUserVar[Sender;$authorID]]

$onlyIf[$getGlobalUserVar[InRelationship;$authorID]!=True;]
`
},

{
name: "marriage",
aliases: ["marriageinfo"],
code: `
$if[$mentioned[1]==]
$title[🌸 | Marriage info: $username[$findUser[$message;yes]]]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$description[**You** are married to: $username[$getGlobalUserVar[MarriedTo;$findUser[$message;yes]]]\nYou have been married since: <t:$getGlobalUserVar[MarriageDate;$findUser[$message;yes]]> (<t:$getGlobalUserVar[MarriageDate;$findUser[$message;yes]]:R>)]
$onlyIf[$getGlobalUserVar[InRelationship;$authorID]!=False;You are not married.]
$else
$title[🌸 | Marriage info: $username[$findUser[$message;yes]]]
$color[$getGlobalUserVar[EmbedColor;$authorID]]
$description[$username[$findUser[$message;yes]] is married to: $username[$getGlobalUserVar[MarriedTo;$findUser[$message;no]]]\nThey have been married since: <t:$getGlobalUserVar[MarriageDate;$findUser[$message;no]]> (<t:$getGlobalUserVar[MarriageDate;$findUser[$message;no]]:R>)]
$onlyIf[$getGlobalUserVar[InRelationship;$findUser[$message;yes]]!=False;This user is not married.]
$onlyIf[$getGlobalUserVar[UserInt;$findUser[$message;no]]!=False;This user has interaction commands disabled from their settings.]
$endif

$onlyIf[$isBot[$findUser[$message;yes]]!=true;Bots marrying people... hmm.]
$globalCooldown[10s;Please don't spam commands.]
`
},

{
name: "divorce",
code: `
You divorced.
$setGlobalUserVar[InRelationship;False;$authorID]
$setGlobalUserVar[InRelationship;False;$getGlobalUserVar[Sender;$authorID]]
$setGlobalUserVar[MarriedTo;;$getGlobalUserVar[Sender;$authorID]]
$setGlobalUserVar[MarriedTo;;$authorID]
$setGlobalUserVar[MarriageDate;;$authorID]
$setGlobalUserVar[MarriageDate;;$getGlobalUserVar[Sender;$authorID]]
`
}


]
