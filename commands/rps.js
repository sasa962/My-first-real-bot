
const { MessageEmbed } = require('discord.js');
const rps = ['scissors','rock', 'paper'];
const res = ['Scissors :v:','Rock :fist:', 'Paper :raised_hand:'];

module.exports = {
      name: 'rps',
      aliases: ['pkn','papierkamieńnożyce'],
      description: 'Play a game of rock–paper–scissors against Calypso!',
     permissions: ["SEND_MESSAGES"],
    

execute(message, args, cmd, client, discord, profileData) {   
  let userChoice;
    if (args.length) userChoice = args[0].toLowerCase();

    userChoice = rps.indexOf(userChoice);
    const botChoice = Math.floor(Math.random()*3);
    let result;
    if (userChoice === botChoice) result = 'It\'s a draw!';
    else if (botChoice > userChoice || botChoice === 0 && userChoice === 2) result = '**Greenville Bot** wins!';
    else result = `**${message.member.displayName}** wins!`;
    const embed = new MessageEmbed()
      .setTitle(`${message.member.displayName} vs. Greenville Bot`)
      .addField('Your Choice:', res[userChoice], true)
      .addField('Greenville Bot\'s Choice', res[botChoice], true)
      .addField('Result', result, true)
      .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      .setColor(message.guild.me.displayHexColor);
    message.channel.send(embed);
  }
}
