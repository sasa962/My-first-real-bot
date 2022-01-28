
const { MessageEmbed } = require('discord.js');

module.exports =  {
      name: 'coinflip',
      aliases: ['cointoss', 'coin', 'flip'],
      description: 'Flips a coin.',
      permissions: ["SEND_MESSAGES"],
    
      async execute(message, args, cmd, client, discord, profileData) {
    const n = Math.floor(Math.random() * 2);
    let result;
    if (n === 1) result = 'orzeł';
    else result = 'reszka';
    const embed = new MessageEmbed()
      .setTitle('½  Coinflip  ½')
      .setDescription(`I flipped a coin for you, ${message.member}. It was **${result}**!`)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
};
