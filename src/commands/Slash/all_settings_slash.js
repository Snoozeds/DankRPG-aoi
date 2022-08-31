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

**Embed color** - This will change the color of embeds to your own choice. [Color Picker](https://colorpicker.me 'Color Picker')
/changecolor \`#hexid\`
Your value: $getGlobalUserVar[EmbedColor;$authorID]

**Family Mode** - Removes swearing/references from commands.
/familymode \`true/false\`
Your Value: $getGlobalUserVar[FamilyMode;$authorID]

**UserInteractions** - Whether or not users can use commands that mention you.
/userinteractions \`true/false\`
Your value: $getGlobalUserVar[UserInt;$authorID]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
}
]
`
},

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

},

{

}

]