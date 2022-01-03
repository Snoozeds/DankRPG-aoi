const aoijs = require('aoi.js');
const config = require('./config.json');

//Top.gg stuff
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const { AutoPoster } = require('topgg-autoposter')

const ap = AutoPoster('TOPGG TOKEN', client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

client.login(config.token)

const bot = new aoijs.Bot({
  token: config.token,
  prefix: ["$getServerVar[Prefix]", "$getServerVar[Prefix] "],
  intents: config.intents,
});

bot.status({
    text: "05/01/22.. | d!help", 
    type: "PLAYING",
    time: "12",
    })

bot.variables({
  Coi: "<:RPGCoin:855767372534906920>", // Variable to make typing the coin emoji easier
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
  //
  Stone : "0",
  Wood : "0",
  Slime: "0",
  //
  BoughtHouse: "False", // Bought house or not
  GiftL: "1", // Gift Stock
  HouseL: "1", // House Stock
  TopggToken: "TOPGG TOKEN",
  //
  PetType: "none",
  PetName: "Your pet hasn't been named yet. Run \`<prefix>petname <name>\`.",
  HasPet: "false",
  PetIMG : "",
  //

  // These are the DEFAULTS for each variable.
  })
bot.onMessage()
bot.onInteractionCreate()
bot.loadCommands(`./commands/Common`)
bot.loadCommands(`./commands/Economy`)
bot.loadCommands(`./commands/Shop`)
bot.loadCommands(`./commands/Interactions`)
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
