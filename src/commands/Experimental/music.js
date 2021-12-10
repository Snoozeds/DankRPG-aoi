module.exports = [{
	name: "play",
	aliases: "start",
	code: `$playSong[$message;30s;yes;yes;Could not play song!]
	$suppressErrors`
},

{
	name: "skip",
	code: `
	Skipped.
	$skipSong
	$suppressErrors`
},

{
	name: "stop",
	code: `
	Stopped.
	$stopSong
	$suppressErrors
	`
},

{
	name: "loopsong",
	code: `Looping: $loopSong
	$suppressErrors`
},

{
	name: "cp",
	aliases: "playing",
	code: `$author[$songInfo[title];https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmaxcdn.icons8.com%2FShare%2Ficon%2FMedia_Controls%2Fyoutube_play1600.png&f=1&nofb=1;$songInfo[url]]
	$description[Duration: $songInfo[current_duration]/$songInfo[duration_left] ($songInfo[duration] total)\nVolume: $volume%\nSong requested by: <@$songInfo[userID]>\n]
	$image[$songInfo[thumbnail]]
	$color[$getGlobalUserVar[EmbedColor]]
	$footer[Uploaded by: $songInfo[publisher]]
	$suppressErrors
	`
},

{
	name: "leavevc",
	code: `Ok. I left the voice channel $leaveVC
	$suppressErrors`
},

{
	name: "volume",
	code: `
	$eval[$volume[$message]]
	Ok, changed the volume to $message.
	$onlyIf[$message<151;You cannot set the volume higher than 150%.]
	$onlyIf[$isNumber[$message]!=false;]
	$suppressErrors`
}

]
