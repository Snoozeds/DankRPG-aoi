module.exports = ({
name: "eval",
code: `$eval[$message;no]
$onlyForIDs[$botOwnerID[;];]
$onlyIf[$isBot[$authorID]!=true;]`
})
