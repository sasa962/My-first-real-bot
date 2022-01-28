const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'helpmod',
    permissions: ["MANAGE_MESSAGES"],
    aliases:['pomocmod'],
    description: "this is a ping command!",
    async execute(message, args, cmd, client, discord, ){
        message.channel.send(     new MessageEmbed()
        .setTitle('Komendy admina\n\n\n')        
        .setDescription('⛔**ban**  -ban(nick)powód\n'
        +'❌**Clear**  -clear (nie czyść powyżej 99 bo wywali bota)\n\n'
        +'➕**Give** -give(nick komu chesz dać pieniądze)ilość\n\n'
        +'🔉**odcisz** -unmute ( nick osoby którą chesz odciszyć)\n\n'
        +'🔇**wycisz** -mute(nick osoby którą chcesz wyciszyć\n\n'
        +'**daj role** -giverole(nick osoby której chesz dać\n\n'
        +'**wyrzuć** -kick(nick tej osoby)powód\n\n'
        +'**zmień nick** -nickname(nick tej osoby)jaki ma mieć nick'
        )
        .setColor("RED"))
    }
}