
const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');

module.exports = {
      name: 'meme',
      description: 'Displays a random meme from the `memes`, `dankmemes`, or `me_irl` subreddits.',
      description: 'tutaj nic nie ma ',
      permissions:["SEND_MESSAGES"],
      async execute(message, args, cmd, client, discord, profileData) {
    try {
      let res = await fetch('https://meme-api.herokuapp.com/gimme');
      res = await res.json();
      const embed = new MessageEmbed()
        .setTitle(res.title)
        .setImage(res.url)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        .setColor(message.guild.me.displayHexColor);
      message.channel.send(embed);
    } catch (err) {
      message.client.logger.error(err.stack);
      this.sendErrorMessage(message, 1, 'Please try again in a few seconds', err.message);
    }
  }
};
