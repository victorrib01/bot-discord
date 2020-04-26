const Discord = require("discord.js");
const bot = new Discord.Client();
const config = require("./config.json");

bot.on("ready", ()=>{
  console.log(`O bot foi fumar maconha com ${bot.user.cache.size} usuarios, em ${bot.channels.cache.size} canais, em ${bot.guilds.cache.size} servidores.`);
  bot.user.setActivity(`To fumando maconha em ${bot.guilds.cache.size} servidores`)
});

bot.on("guildCreate", guild => {
  console.log(`O bot entrou no servidor: ${guild.cache.name} (id: ${guild.cache.id}). Populacão de maconheiros: ${guild.cache.memberCount}`);
  bot.user.setActivity(`To fumando maconha em ${bot.guilds.cache.size} servidores`);
});

bot.on("guildDelete", guild=>{
  console.log(`O bot foi removido do servidor: ${guild.cache.name} (id: ${guild.cache.id})`);
  console.log(`E automaticamente o servidor virou careta!`);
  bot.user.setActivity(`To fumando maconha em ${bot.guilds.cache.size} servidores`);
});

bot.on("message", async message => {

});

bot.login(config.token);