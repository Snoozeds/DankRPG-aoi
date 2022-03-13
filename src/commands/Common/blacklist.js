module.exports = ({
    name: "blacklist",
    code: `
    $if[$getVar[BlacklistedUsers]==]
    $setVar[BlacklistedUsers;$getVar[BlacklistedUsers]$message]
    $else
    $setVar[BlacklistedUsers;$getVar[BlacklistedUsers]+$message]
    $endif
    $onlyForIDs[$botOwnerID[;];]
    $onlyIf[$isBot[$authorID]!=true;]`
    })
    
