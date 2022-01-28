const discord = require('discord.js'); //Define the discord.js module
const client = new discord.Client(); //Creating discord.js client (constructor)
const disbut = require('discord-buttons');
disbut(client);
module.exports = {
    name: "button",
    description: 'clear messages??',
    aliases: ['buttontest'],
    permissions:["MANAGE_MESSAGES"],
    async execute(message,args, cmd, client, Discord) {

      

        let button = new disbut.MessageButton()
        .setStyle('url') //kolor   url
        .setURL('https://discord.com/') //.setid   URL
        .setLabel('Serwer Roblox') 
        .setDisabled(false); 
      
      message.channel.send('Kliknij aby dołączyć do serwera', button);

 }
}