module.exports = {
	name: "feedback",
	code: `$channelSendMessage[896712703048052768;ID: $authorID\nFeedback by: **$username#$discriminator[$authorID]**: $message]
	$onlyIf[$message!=;Please do not send empty feedback.]
	$title[Feedback sent]
	$description[Thank you for your feedback! We have recieved it.]
	$color[$getGlobalUserVar[EmbedColor]]
	$suppressErrors`
}
