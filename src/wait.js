/* This file is a seperate instance of DankRPG, running all commands with $wait.
You will still need to restart this file to add variables for WAITED commands.
If you add variables for index.js that aren't needed in here, and restart that, $wait's will be unaffected!
*/

const aoijs = require('aoi.js');
const config = require('./config.json');

const bot = new aoijs.Bot({
  token: config.token,
  prefix: ["$getServerVar[Prefix]", "$getServerVar[Prefix] ", "<@!$clientID>", "<@$clientID> "], // Client ID trigger is mentioning the bot. Can be useful if a user doesn't know the prefix.
  intents : ['guilds','guildMessages'],
  suppressAllErrors: true
});

bot.variables(require('./variables.js'));
bot.onMessage({respondToBots: false})
try{}catch(error){console.log(error)}

const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./waited_commands/")