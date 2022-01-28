module.exports = {
    name: "voicekick",
    category: "moderation",
    aliases: ["vkick",],
    permissions:[],
    async execute(message, args, cmd, client, discord, profileData){


      if (!message.mentions.members.first())
        return message.channel.send(
          `Please Mention User That You Want To Kick From Voice Channel!`
        );
  
      let { channel } = message.mentions.members.first().voice;
  
      if (!channel)
        return message.channel.send(`User Is Not In Any Voice Channel!`);
  
      message.mentions.members.first().voice.kick();
      
      message.channel.send(`User Has Been Kicked From Voice Channel!`)
    }
  };