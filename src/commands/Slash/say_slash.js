module.exports = {
name: "say",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[**$username[$authorID]** says: \n$interactionData[options.data[0].value]]
`
}