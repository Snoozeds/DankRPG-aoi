const aoijs = require('aoi.js');
const config = require('./config.json');

const bot = new aoijs.Bot({
  token: config.token,
  prefix: "$getServerVar[Prefix]",
  intents: config.intents,
});

bot.status({
    text: "$serverCount servers || d!help", 
    type: "WATCHING",
    time: "12",
    })

bot.variables({
  Coins: "0",
  HP: "100",
  MaxHP : "100",
	ATK: "1",
  Prefix: "d!",
  EmbedColor : "#FFE302",
  FamilyMode : "False",
  UserInt : "True",
	FirstDaily: "True",
	DailyAchievement: "<:Locked:899050875916541963>",
	FarmO: "<:Orange:861639407978020914>",
	FarmK: "<:Kiwi:861639983268626442>",
	FarmS: "<:Strawberry:861641050930282516>",
	FirstFarm: "True",
	FarmAchievement: "<:Locked:899050875916541963>",
	FirstATK: "True",
	ATKAchievement: "<:Locked:899050875916541963>",
  InBusiness: "False",
  BusinessType: "None",
  //////////////////////////////////////////////////
  Stone : "0",
  Wood : "0",
  Slime: "0",
  //////////////////////////////////////////////////
  }) 
  // These are the DEFAULTS for each variable.

bot.onMessage()
bot.onInteractionCreate()
bot.loadCommands(`./commands/Common`)
bot.loadCommands(`./commands/Economy`)
bot.loadCommands(`./commands/Shop`)
bot.loadCommands(`./commands/Interactions`)
bot.loadCommands(`./commands/Experimental`)
bot.loadCommands(`./commands/Stats`)

const http = require('http');

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end('Running discord bot....!');
}

const server = http.createServer(requestListener);
server.listen(8080);


// Error handler so bot doesn't kaboom
try{}catch(error){console.log(error)}
