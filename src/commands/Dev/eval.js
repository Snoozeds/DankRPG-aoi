module.exports = ({
name: "eval",
aliases: ["dev eval", "deveval"],
code: `$eval[$message;no]
$onlyForIDs[$getVar[ownid];]`
})

// eval commands currently don't work with $botOwnerID, no idea why.