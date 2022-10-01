const aoijs = require('aoi.js');
const config = require('./config.json');
const { AutoPoster } = require('topgg-autoposter');

const bot = new aoijs.Bot({
  token: config.token,
  prefix: ["$getServerVar[Prefix]", "$getServerVar[Prefix] ", "<@!$clientID>", "<@$clientID> "], // Client ID trigger is mentioning the bot. Can be useful if a user doesn't know the prefix.
  intents : ['guilds','guildMessages'],
  suppressAllErrors: true
});


// Posts stats for top.gg. Safe to remove.
// The discord.js bot here isn't actually used for anything but grabbing the bot's server count and POSTing it to top.gg.

const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [] });
client.login(config.token)

const ap = AutoPoster(config.topgg, client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

//


// Top.gg Voting from: https://pastebin.com/AXQysNsz, safe to remove.

const express = require('express') 
const Topgg = require('@top-gg/sdk')
const app = express()
const event = new aoijs.CustomEvent(bot)

event.command({
listen: "votes",
code: `
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$eventData[[0]]];500];$eventData[[0]]]
$setGlobalUserVar[MegaCoins;$sum[$getGlobalUserVar[MegaCoins;$eventData[[0]]];1];$eventData[[0]]]
$setGlobalUserVar[VoteCount;$sum[$getGlobalUserVar[VoteCount;$eventData[[0]]];1];$eventData[[0]]]
$setGlobalUserVar[HPPotion;$sum[$getGlobalUserVar[HPPotion;$eventData[[0]]];1];$eventData[[0]]]]
$setGlobalUserVar[voteAchievement;<:Unlocked:899050875719393281>;$eventData[[0]]]`
})
event.listen("votes")

const webhook = new Topgg.Webhook(config.topggAuth)
app.post('/', webhook.listener(vote => {
event.emit('votes', vote.user)
}))
 
app.listen(69)

//

bot.status({
    text: "d!help | dankrpg.xyz", 
    type: "PLAYING",
    time: "12",
    })

bot.variables(require('./variables.js'));

bot.onMessage({respondToBots: false})
bot.onInteractionCreate() // Used for slash commands. Read below.

/* To make slash commands in servers, you'll have to eval this code:

$createApplicationCommand[global;prefix;check the prefix of the current server.;true;slash]
$createApplicationCommand[global;info;view info about Dank RPG.;true;slash]
$createApplicationCommand[global;coinflip;flips a coin.;true;slash]
$createApplicationCommand[global;meme;sends a random meme.;true;slash]
$createApplicationCommand[global;neko;sends a neko.;true;slash]
$createApplicationCommand[global;say;sends a message;true;slash;{"name" : "message","description" : "the message you'd like me to say.","type" : 3,"required" : true}]
$createApplicationCommand[global;userinfo;displays info about a user.;true;slash;[{"name":"member", "description":"the member who's info you want to see.","type":"USER", "required": true}]]
$createApplicationCommand[global;profile;displays a user's rpg stats;true;slash;[{"name":"member", "description":"the member who's profile you want to see.","type":"USER", "required": true}]]
$createApplicationCommand[global;serverinfo;displays info about the current server.;true;slash] 
$createApplicationCommand[global;settings;displays the settings menu.;true;slash]
$createApplicationCommand[global;changecolor;changes your embed colors.;true;slash;[{"name":"color", "description":"the HEX color you want to change your embeds to.","type":"STRING", "required": true}]]
$createApplicationCommand[global;familymode;family mode option.;true;slash;[{"name":"value", "description":"whether family mode is enabled or not.","type":"BOOLEAN", "required": true}]]
$createApplicationCommand[global;userinteractions;user interactions option.;true;slash;[{"name":"value", "description":"whether users can mention you in commands or not.","type":"BOOLEAN", "required": true}]]
$createApplicationCommand[global;serversettings;displays the server settings menu.;true;slash]
$createApplicationCommand[global;changeprefix;changes the prefix of the current server, requires the correct perms.;true;slash;[{"name":"value", "description":"the new prefix","type":"STRING", "required": true}]]
$createApplicationCommand[global;permissions;changes the required permissions for admin commands, Server owner only.;true;slash;[{"name":"value", "description":"manageserver or admin","type":"STRING", "required": true}]]
$createApplicationCommand[global;commands;displays all available commands.;true;slash]
$createApplicationCommand[global;shop;displays the shop menu.;true;slash]
$createApplicationCommand[global;8ball;the magic 8ball will answer your questions.;true;slash;[{"name":"question", "description":"the question you'd like to ask.","type":"STRING", "required": true}]]
$createApplicationCommand[global;kill;kills a user.;true;slash;[{"name":"member", "description":"the member you'd like to kill.","type":"USER", "required": true}]]
*/

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

// Error handler so bot doesn't kaboom
try{}catch(error){console.log(error)}
