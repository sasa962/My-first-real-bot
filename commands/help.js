const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    permissions: ["SEND_MESSAGES"],
    aliases:['pomoc'],
    description: "this is a ping command!",
    async execute(message, args, cmd, client, discord, ){
        message.channel.send(     new MessageEmbed()
        .setTitle('Z czym masz problem?\n\n\n')
        .setDescription('**💸Ekonomia**   -helpekonomia\n'
        +'👨‍💼**Moderacja**              -helpmod\n'
        +'🎮**Gry**    -helpgry\n'
        +'🌎 **inne komendy** -helpinne'
        
        
        )
        .setColor("BLUE"))
    }
}