module.exports = [{
name: "settings",
prototype: "slash",
type: "interaction",
code:`
$interactionReply[
;
{newEmbed:
{title:Settings}
{description:Here are all the settings you can change.

**Embed color** - This will change the color of embeds to your own choice.
</changecolor:1014678076254322739> \`#hexID\`
Your value: $getGlobalUserVar[EmbedColor;$authorID]

**Family Mode** - Removes swearing/references from commands.
</familymode:1014688145561899128> \`True/False\`
Your Value: $getGlobalUserVar[FamilyMode;$authorID]

**UserInteractions** - Whether or not users can use commands that mention you.
</userinteractions:1014688372494704640> \`True/False\`
Your value: $getGlobalUserVar[UserInt;$authorID]

Confused? Check out our user settings documentation [here](https://dankrpg.xyz/docs/The-Basics/user-settings).
}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
{footer:Tip! You can click on the highlighted slash text to quickly change the setting.}
}
]
`
}, // If you have slash commands, you must change the </NAME:ID> to your own respective slash command names and IDs.

{
name: "changecolor",
prototype: "slash",
type: "interaction",
$if: "v4",
code:`
$interactionReply[
$if[$isValidHex[$replaceText[$interactionData[options.data[0].value];#;;-1]]==false]
$interactionReply[\`$interactionData[options.data[0].value]\` is not a valid hex code. Please visit <https://colorpicker.me> to find a valid **Hex Code**.]
$else
Changed all embed colors to #$replaceText[$interactionData[options.data[0].value];#;;-1].
$setGlobalUserVar[EmbedColor;$interactionData[options.data[0].value];$authorID]
$endif
`
},

{
name: "familymode",
prototype: "slash",
type: "interaction",
$if: "v4",
code: `
$interactionReply[
$if[$interactionData[options.data[0].value]==true]
Set family mode to $interactionData[options.data[0].value].
$setGlobalUserVar[FamilyMode;True;$authorID]
$else
Set family mode to $interactionData[options.data[0].value].
$setGlobalUserVar[FamilyMode;False;$authorID]
$endif
]`
}, // Note that discord's booleans are lowercase, meaning "true" and "false". The FamilyMode variable is uppercase, so it will be converted to uppercase.

{
name: "userinteractions",
prototype: "slash",
type: "interaction",
$if: "v4",
code: `
$interactionReply[
$if[$interactionData[options.data[0].value]==true]
Set user interactions to $interactionData[options.data[0].value].
$setGlobalUserVar[UserInt;True;$authorID]
$else
Set user interactions to $interactionData[options.data[0].value].
$setGlobalUserVar[UserInt;False;$authorID]
$endif
]`
}

]