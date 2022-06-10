module.exports = {
name: "dev setup",
aliases: ["setup", "devsetup"],
code: `
Welcome to the dev setup. For now, this just creates the necessary slash commands globally.
Slash commands added: **Prefix - View the prefix for the current server**
Slash commands may take up to 3 hours to appear inside discord.

***You only need to run this once***

$createApplicationCommand[global;Prefix;View the prefix for the current server.;true]
$onlyForIDs[$botOwnerID[;];]
`
}