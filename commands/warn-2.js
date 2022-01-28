const { MessageEmbed } = require('discord.js')
const db = require("quick.db");

module.exports = {
  name: "warn",
  permissions:["DEAFEN_MEMBERS"],
  aliases: ["ostrzeż"],
  description: "Warn anyone who do not obey the rules",
  async execute(message,args, cmd, client, Discord,profileData){
 

    const member = message.mentions.members.first();

    if (!member) {
      return message.channel.send(
        "Please Mention the person to who you want to warn - warn @mention <reaosn>"
      );
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("You can not warn bots");
    }


   

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Please provide reason to warn - warn @mention <reason>"
      );
    }

    let warnings = db.get(`warnings_${message.guild.id}_${member.id}`);

    if (warnings === null) {
      db.set(`warnings_${message.guild.id}_${member.id}`, 1);
      member.send(
        `You have been warned in **${message.guild.name}** for ${reason}`
      );
      await message.channel.send(
        `You warned **${
          message.mentions.users.first().username
        }** for ${reason}`
      );
    } else if(warnings !== null) {
      
      db.add(`warnings_${message.guild.id}_${member.id}`, 1);
      
      member.send(`You have been warned by ${message.author.username} for this reason: ${reason}`)
            .catch(error => message.channel.send(`Sorry <${message.author}> I couldn't n't warn because of : ${error}`));
            let warnEmbed = new MessageEmbed()
            .setTitle("**__Warn Report__**")
            .setDescription(`**<@${member.user.id}> has been warned by <@${message.author.id}>**`)
            .addField(`**Reason:**`, `\`${reason}\``)
            .addField(`**Action:**`, `\`Warn\``)
            .addField(`**Moderator:**`, `${message.author}`)

            message.channel.send(warnEmbed)

    }
  } 
}
