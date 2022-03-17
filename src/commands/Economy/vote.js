module.exports = {
name: "vote",
code: `
> Voting has changed! You will now automatically get your vote rewards.
> You can vote here: <https://top.gg/bot/$clientID/vote>
$globalCooldown[30s;Please don't spam commands (**%time%** left)]
$onlyIf[$isBot[$authorID]!=true;]`
}