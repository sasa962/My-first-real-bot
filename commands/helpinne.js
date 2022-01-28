const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'helpinne',
    permissions: ["SEND_MESSAGES"],
    aliases:['pomocinne'],
    description: "this is a ping command!",
    async execute(message, args, cmd, client, discord, ){
        message.channel.send(     new MessageEmbed()
        .setDescription('\n\n\n'
        +'😀**emojify** tworzy text emotkami -emojify(text emotek)\n'
        +'🖼️**image** wysyła zdjęcie z neta -image(temat zdjęcia)\n'
        +'⌛**ping** sprawdza twój ping  -ping\n'
        +'◀️**reverse** odwraca text (np.xolbor) -reverse(np.roblox) \n'
        +'🤔**suggestion** -suggestion (co chesz zaproponować)\n'
        +'🎟️ **ticket**  tworzy specjalny kanał gdzie zgłaszasz błąd    -ticket \n  '
        +'🧍**Avatar** pokazuje zdjęcia danej osoby  -avatar(nick użytkownika)'
        +''
        )
        .setColor("#8c92ac"))
    }
}