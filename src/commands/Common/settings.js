module.exports = [{
    name: "settings",
    aliases: "options",
    code: `
    $title[1;Settings]
    $description[1;Here are all the settings you can change.

    **Embed color** - This will change the color of embeds to your own choice. [Color Picker](https://colorpicker.me 'Color Picker')
		$getServerVar[Prefix]changecolor <#hexid>
		Your value: $getGlobalUserVar[EmbedColor;$authorID]\n

    **Family Mode** - Removes swearing/references from commands. 
		$getServerVar[Prefix]familymode <true/false>
		Your Value: $getGlobalUserVar[FamilyMode;$authorID]\n

    **UserInteractions** - Whether or not users can use commands that mention you (e.g hug, marry).
		$getServerVar[Prefix]userint <true/false>
		Your value: $getGlobalUserVar[UserInt;$authorID] \n

    **Cat Notifications** - Whether or not cat notifications are send in chat (finding coins).
    $getServerVar[Prefix]catnotifications <true/false>
    Your value: $getGlobalUserVar[CatNotificationsOn;$authorID]]
		$footer[1;True = Enabled | False = Disabled]

    $color[1;$getGlobalUserVar[EmbedColor;$authorID]]
    $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
		$suppressErrors
    $onlyIf[$isBot[$authorID]!=true;]`
},

{
    name : "changecolor",
    aliases: "changecolour",
    code: `
    $onlyif[$isValidHex[$replaceText[$message;#;;-1]]!=false;This is not a valid hex code. Please visit <https://colorpicker.me> to find a valid hex code.]
    Changed all embed colors to $message.
		$setGlobalUserVar[EmbedColor;$message;$authorID]
    $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
		$suppressErrors
    $onlyIf[$isBot[$authorID]!=true;]
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
		$suppressErrors
    $onlyIf[$isBot[$authorID]!=true;]`
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
		$suppressErrors
    $onlyIf[$isBot[$authorID]!=true;]`
},

{
  name: "catnotifications",
  aliases : ["catnoti", "catnotif"],
  code: `
  $globalCooldown[10s;Please wait **%time%** before running this command again. This helps us enforce ratelimits.]
  $if[$message==true]
  Turned on cat notifications (they are now sent in chat)
  $setGlobalUserVar[CatNotificationsOn;True;$authorID]
  $endif
  $if[$message==false]
  Turned off cat notifications (they are now no longer sent)
  $setGlobalUserVar[CatNotificationsOn;False;$authorID]
  $endif

  $if[$message==]
  Please provide a proper argument. Example: \`$getServerVar[Prefix]catnotifications true\`\
  $endif
  $suppressErrors
  $onlyIf[$isBot[$authorID]!=true;]`
}


]
