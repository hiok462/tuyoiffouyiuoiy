const express = require('express');
const app = express();
app.get('/', (req, res) => {
  res.send('Hello Express app!')
});
app.listen(3000, () => {
  console.log('server started');
});
const Discord = require("discord.js");
const { token, prefix } = require("./config.json");
const client = new Discord.Client({
  intents: [
    Discord.GatewayIntentBits.Guilds,
    Discord.GatewayIntentBits.GuildMessages,
    Discord.GatewayIntentBits.MessageContent,
  ],
});
const { readdirSync } = require("node:fs");
readdirSync("./handlers").forEach((handler) => {
  require(`./handlers/${handler}`)(client);
});
module.exports.Client = client;

client.login(token);
