const aoijs = require('aoi.js');
const config = require('./config.json');

const bot = new aoijs.Bot({
  token: config.token,
  prefix: ["$getServerVar[Prefix]", "$getServerVar[Prefix] ", "<@!$clientID>", "<@$clientID> "], // Client ID trigger is mentioning the bot. Can be useful if a user doesn't know the prefix.
  intents : ['guilds','guildMessages'],
  suppressAllErrors: true
});

// Top.gg Voting from: https://pastebin.com/AXQysNsz ///////////////////////

const express = require('express') 
const Topgg = require('@top-gg/sdk')
const app = express()
const event = new aoijs.CustomEvent(bot)

event.command({
listen: "votes",
code: `$sendDM[Thanks for voting!\nYou earned:\n**$getVar[Coi]100\n$getVar[DiamondEmoji]1**;$eventData[[0]];no]
$setGlobalUserVar[Coins;$sum[$getGlobalUserVar[Coins;$eventData[[0]]];100];$eventData[[0]]]
$setGlobalUserVar[Diamond;$sum[$getGlobalUserVar[Diamond;$eventData[[0]]];1];$eventData[[0]]]`
})
event.listen("votes")

const webhook = new Topgg.Webhook(config.topgg)
app.post('/', webhook.listener(vote => {
event.emit('votes', vote.user)
}))
 
app.listen(69) // It is best to change this port and keep it private. It is also recommended to only open the port you select (using something like ufw).
////////////////////////////////////////////////////////////////////////////

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
$createApplicationCommand[global;profile;displays a user's rpg stats;true;slash;[{"name":"member", "description":"the member who's info you want to see.","type":"USER", "required": true}]] 

*/

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

// Error handler so bot doesn't kaboom
try{}catch(error){console.log(error)}
