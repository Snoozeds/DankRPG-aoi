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
$getServerVar[Prefix]changecolor \`#hexid\`
Your value: $getGlobalUserVar[EmbedColor;$authorID]

**Family Mode** - Removes swearing/references from commands.
$getServerVar[Prefix]familymode \`true/false\`
Your Value: $getGlobalUserVar[FamilyMode;$authorID]

**UserInteractions** - Whether or not users can use commands that mention you.
$getServerVar[Prefix]userint \`true/false\`
Your value: $getGlobalUserVar[UserInt;$authorID]}
{color:$getGlobalUserVar[EmbedColor;$authorID]}
}
]
`
}]