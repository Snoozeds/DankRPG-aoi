module.exports = {
name: "credits",
code: `$title[1;Credits]
$description[1;**Farm crops**:
"[LPC] Crops" by bluecarrot16, Daniel Eddeland (daneeklu), Joshua Taylor, Richard Kettering (Jetrel).
Commissioned by castelonia.
[CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Link](https://opengameart.org/content/lpc-crops)

**Pet thumbnails**:
"googlefonts/noto-emoji"
[OFL-1.1](https://opensource.org/licenses/OFL-1.1) | [Link](https://github.com/googlefonts/noto-emoji)

**Mining resources**:
My good friend, shup#5870.

You may view the source code for this bot on [GitHub](https://github.com/SnoozedsGithub/DankRPG)
]
$color[1;$getGlobalUserVar[EmbedColor]]
$globalCooldown[10s;Please wait before running this command again. This helps us enforce ratelimits. %time%]
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
`
}
