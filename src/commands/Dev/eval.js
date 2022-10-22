module.exports = ({
name: "eval",
aliases: ["dev eval", "deveval"],
category: "Dev",
description: "Evaluates code.",
usage: "<code>",
code: `$eval[$message;no]
$onlyForIDs[$getVar[ownid];]`
})

// eval commands currently don't work with $botOwnerID, no idea why.