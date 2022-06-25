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

bot.variables({
  ownid: "764564962815115267", // Change this to your own ID. This is for when $botOwnerID won't work with multiple IDs (like in an $if statement). Can ONLY BE ONE ID.
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
  BoughtPick: "False", // Bought pickaxe or not
  BoughtBait: "False", // Bought bait or not
  GiftL: "1", // Gift Stock
  HouseL: "1", // House Stock
  PickL: "1", // Pickaxe Stock
  BaitL: "1", // Bait Stock
  TopggToken: "", // No longer used
  PetType: "none",
  PetName: "Your pet hasn't been named yet. Run \`<prefix>petname <name>\`.",
  HasPet: "false",
  PetIMG : "",
  Gold: "0",
  Diamond: "0",
  SlimeEmoji: "<:Slime:932047284814884996>",
  StoneEmoji: "<:Stone:985624123868840036>",
  GoldEmoji: "<:Gold:985624122333737041>",
  DiamondEmoji: "<:Diamond:985624120844779600>",
  AcceptEmoji: "<:Unlocked:899050875719393281>",
  DenyEmoji: "<:Locked:899050875916541963>",
  Sender: "",
  MarriageDate: "", // Time in unix since user was married.
  InRelationship: "False",
  MarriedTo: "",
  CatNotificationsOn: "True",
  MiningTime: "10m",
  deerStock: "0",
  mooseStock: "0",
  rabbitStock: "0",
  foxStock: "0",
  bjActive: "False",
  bjBet: "",
  // These are the DEFAULTS for each variable.
  })

bot.onMessage({respondToBots: false})
bot.onInteractionCreate() // Used for slash commands. Read below.

/* To make slash commands in servers, you'll have to eval this code:

$createApplicationCommand[global;prefix;check the prefix of the current server.;true;slash]
$createApplicationCommand[global;info;view info about Dank RPG.;true;slash]
$createApplicationCommand[global;coinflip;flips a coin.;true;slash]
$createApplicationCommand[global;meme;sends a random meme.;true;slash]
$createApplicationCommand[global;neko;sends a neko.;true;slash]


*/
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd,"./commands/")

// Error handler so bot doesn't kaboom
try{}catch(error){console.log(error)}
