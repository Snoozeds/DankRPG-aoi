const aoijs = require('aoi.js');
const config = require('./config.json');

// Top.gg Posting Stats: ////////////////////////////////////
const { Client, Intents } = require('discord.js');
const client = new Client({ intents: [Intents.FLAGS.GUILDS] })
const { AutoPoster } = require('topgg-autoposter')

const ap = AutoPoster(config.topgg, client)

ap.on('posted', () => {
  console.log('Posted stats to Top.gg!')
})

client.login(config.token)

const bot = new aoijs.Bot({
  token: config.token,
  prefix: ["$getServerVar[Prefix]", "$getServerVar[Prefix] "],
  intents: config.intents,
  suppressAllErrors: true,
});

bot.status({
    text: "v1.15 | d!help", 
    type: "PLAYING",
    time: "12",
    })
// ///////////////////////////////////////////////////////

bot.variables({
  Coi: "<:RPGCoin:855767372534906920>", // Variable to make typing the coin emoji easier.
  Heart: "<:RPGHeart:855755205102534686>", // Variable to make typing the hp emoji easier.
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
  Stone : "0",
  Wood : "0",
  Slime: "0",
  BoughtHouse: "False", // Bought house or not
  GiftL: "1", // Gift Stock
  HouseL: "1", // House Stock
  TopggToken: "",
  PetType: "none",
  PetName: "Your pet hasn't been named yet. Run \`<prefix>petname <name>\`.",
  HasPet: "false",
  PetIMG : "",
  Gold: "0",
  Diamond: "0",
  SlimeEmoji: "<:Slime:932047284814884996>",
  StoneEmoji: "<:Stone:932047285058166814>",
  GoldEmoji: "<:Gold:932047285213360208>",
  DiamondEmoji: "<:Diamond:932047284986839110>",
  AcceptEmoji: "<:Unlocked:899050875719393281>",
  DenyEmoji: "<:Locked:899050875916541963>",
  Sender: "",
  MarriageDate: "", // Time in unix since user was married.
  InRelationship: "False",
  MarriedTo: "",
  CatNotificationsOn: "True",
  // These are the DEFAULTS for each variable.
  })

bot.onMessage({respondToBots: true}) // This is set to true for my top.gg code. Either set it to false or add '$onlyIf[$isBot[$authorID]!=true;]' to every new command you make.
bot.onInteractionCreate()
bot.loadCommands(`./commands/Common`)
bot.loadCommands(`./commands/Economy`)
bot.loadCommands(`./commands/Shop`)
bot.loadCommands(`./commands/Interactions`)
bot.loadCommands(`./commands/Stats`)
bot.loadCommands(`./commands/Top.gg`)

// Error handler so bot doesn't kaboom
try{}catch(error){console.log(error)}
