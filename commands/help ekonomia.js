const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'helpekonomia',
    permissions: ["SEND_MESSAGES"],
    aliases:['pomocekonomia'],
    description: "this is a ping command!",
    async execute(message, args, cmd, client, discord, ){
        message.channel.send(     new MessageEmbed()
        .setDescription('Komendy do Ekonomii\n\n\n'
        +'🏦**balans konta**   -balance/bal/saldo/balans/bl\n'
        +'🙏**poproś**    -beg/poproś\n'
        +'🔎**przeszukaj** -search/przeszukaj\n'
        +'💱**withdraw** -withdraw/wd\n'
        )
        .setColor("GREEN"))
    }
}