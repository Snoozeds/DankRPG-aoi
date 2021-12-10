module.exports = [{
    name: "settings",
    aliases: "options",
    code: `
    $title[Settings]
    $description[Here are all the settings you can change.

    **Embed color** - This will change the color of embeds to your own choice. [Color Picker](https://colorpicker.me 'Color Picker')
		$getServerVar[Prefix]changecolor <#hexid>
		Your value: $getGlobalUserVar[EmbedColor;$authorID]\n

    **Family Mode** [Beta] - Removes swearing/references from commands. 
		$getServerVar[Prefix]familymode <true/false>
		Your Value: $getGlobalUserVar[FamilyMode;$authorID]\n

    **UserInteractions** - Disables other users being able to use commands that ping you 
		$getServerVar[Prefix]userint <true/false>
		Your value: $getGlobalUserVar[UserInt;$authorID]]
		$footer[True = Enabled | False = Disabled]

    $color[$getGlobalUserVar[EmbedColor;$authorID]]
    $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
		$suppressErrors`
},

{
    name : "changecolor",
    aliases: "changecolour",
    code: `
    $onlyif[$isValidHex[$message]!=false;This is not a valid hex code. Please visit <https://colorpicker.me> to find a valid hex code.]
    Changed all embed colors to $message.
		$setGlobalUserVar[EmbedColor;$message;$authorID]
    $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
		$suppressErrors
    `
},

{
    name: "familymode",
    aliases : "fmm",
    code: `
    $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
    $if[$message==true]
    Turned on family mode. Stay safe!
    $setGlobalUserVar[FamilyMode;True;$authorID]
    $endif
    $if[$message==false]
    Turned off family mode.
    $setGlobalUserVar[FamilyMode;False;$authorID]
    $endif

    $if[$message==]
    Please provide a proper argument. Example: \`$getServerVar[Prefix]familymode true\`\
    $endif
		$suppressErrors`
},

{
    name: "userint",
    aliases: ["user interactions", "interactions"],
    code: `
    $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
    $if[$message==true]
    Turned on user interactions.
    $setGlobalUserVar[UserInt;True;$authorID]
    $endif
    $if[$message==false]
    Turned off user interactions.
    $setGlobalUserVar[UserInt;False;$authorID]
    $endif
    
    $if[$message==]
    Please provide a proper argument. Example: \`$getServerVar[Prefix]userint true\`
		$endif
		$suppressErrors`
}


]
