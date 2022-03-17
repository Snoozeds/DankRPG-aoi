module.exports = {
name: "feedback",
code: `$channelSendMessage[896712703048052768;ID: $authorID\nFeedback by: **$username#$discriminator[$authorID]**: $message]
$onlyIf[$message!=;Please do not send empty feedback.]
$title[1;Feedback sent]
$description[1;Thank you for your feedback! We have recieved it.]
$color[1;$getGlobalUserVar[EmbedColor]]
$suppressErrors
$globalCooldown[1m;You have already sent feedback in the past minute. Please wait **%time%**]
$onlyIf[$isBot[$authorID]!=true;]
`
}
