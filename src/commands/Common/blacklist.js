module.exports = ({
    name: "blacklist",
    code: `
    test
    $setVar[BlacklistedUsers;$getVar[BlacklistedUsers]+$message]
    $onlyForIDs[$botOwnerID[;];]
    $onlyIf[$isBot[$authorID]!=true;]`
    })
    