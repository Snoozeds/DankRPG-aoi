module.exports = {
name: "kill",
prototype: "slash",
type: "interaction",
code: `
$interactionReply[
<@$findUser[$interactionData[options.data[0].value]]> dies by: **$get[death]**

$let[death;
$randomText[being defenstrated;being bonked;being hit with a suspiciously large spoon;bowing too much and falling off a cliff;following the latest 100% safe trend;pressing a suspiciously out of place red button;trying to fly;forgetting how to breathe;selling both their kidneys;attempting insurance fraud on a train].
]]

$onlyIf[$interactionData[options.data[0].value]!=$authorID;{
"content": "I can't allow you to do that to yourself.","ephemeral": true,"options": {"interaction": true}}]

$onlyIf[$getGlobalUserVar[UserInt;$interactionData[options.data[0].value]]!=False;{
"content": "This user has interactions turned off.","ephemeral": true,"options": {"interaction": true}}]

$onlyIf[$interactionData[options.data[0].value]!=$clientID;{
"content": "hmmm no, that's not possible.","ephemeral": true,"options": {"interaction": true}}]

$globalCooldown[10s;{
"content": "Slow down! You're on a cooldown. %time%",
"ephemeral": true,
"options": {
"interaction": true
}
}]`
}