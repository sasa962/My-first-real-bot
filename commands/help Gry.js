const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'helpgry',
    permissions: ["SEND_MESSAGES"],
    aliases:['pomocgry'],
    description: "this is a ping command!",
    async execute(message, args, cmd, client, discord, ){
        message.channel.send(     new MessageEmbed()
        .setTitle('Komendy do gier\n\n\n')
        .setDescription('🙏**poproś**    -beg/poproś\n'
        +'👨‍💻**hack**      -hack\n'
        +'🧻🪨✂️**rps**    -rps  \n'
        +'🔎**przeszukaj** -search/przeszukaj\n'
        )
        .setColor("GREEN"))
    }
}