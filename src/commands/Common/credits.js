module.exports = {
name: "credits",
code: `$title[1;Credits]
$description[1;**Farm crops**:\n"[LPC] Crops" by bluecarrot16, Daniel Eddeland (daneeklu), Joshua Taylor, Richard Kettering (Jetrel).\nCommissioned by castelonia. \n[CC-BY-SA-4.0](https://creativecommons.org/licenses/by-sa/4.0/) | [Link](https://opengameart.org/content/lpc-crops)
\n**Pet thumbnails**:\n"googlefonts/noto-emoji"\n[OFL-1.1](https://opensource.org/licenses/OFL-1.1) | [Link](https://github.com/googlefonts/noto-emoji)]
$color[1;$getGlobalUserVar[EmbedColor]]
$globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
$suppressErrors
$onlyIf[$isBot[$authorID]!=true;]
`
}
