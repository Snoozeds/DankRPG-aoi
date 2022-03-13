module.exports = ({
    name: "blacklist",
    code: `
    $setVar[BlacklistedUsers;$getVar[BlacklistedUsers]+$message]
    $onlyForIDs[$botOwnerID[;];]
    $onlyIf[$isBot[$authorID]!=true;]`
    })
    
