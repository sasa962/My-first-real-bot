const { MessageEmbed } = require('discord.js')

module.exports = {
    
        name: "dm",
        description: "warn members",
        aliases: ["ostrzeż"],
        permissions:["DEAFEN_MEMBERS"],
        async execute(message,args, cmd, client, Discord,profileData){


let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
if(!member) return message.reply("Please mention a valid member of this server");

let reason = args.slice(1).join(' ');
if(!reason) reason = "(Co chesz mu na pisać)";

member.send(`Dostałeś to od ${message.author.username}.\n\n${reason}`)
        }
    }