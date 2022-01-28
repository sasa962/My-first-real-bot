const Discord = require ('discord.js')
module.exports = {
    name: 'reactionrole',
    description: "Sets up a reaction role message!",
    permissions:["ADMINISTRATOR"],
    async execute(message,args, cmd, client, Discord) {
        const channel = '927538656124751882';
        const GamerRole = message.guild.roles.cache.find(role => role.name === "gamer");
        const realistaRole = message.guild.roles.cache.find(role => role.name === "realista");
 
        const GamerEmoji = '🎮';
        const realistaEmoji = '🌎';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Wybierz drużynę do gry!')
            .setDescription('Wybór drużyny pozwoli ci na interakcję z kolegami z drużyny!\n\n'
                + `${GamerEmoji} dla gaming drużyny\n`
                + `${realistaEmoji} dla realista drużyny`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(GamerEmoji);
        messageEmbed.react(realistaEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === GamerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(GamerRole);
                }
                if (reaction.emoji.name === realistaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(realistaRole);
                }
            } else {
                return;
            }
 
        });
 
        client.on('messageReactionRemove', async (reaction, user) => {
 
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === GamerEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(GamerRole);
                }
                if (reaction.emoji.name === realistaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(realistaRole);
                }
            } else {
                return;
            } 
            
        });
    }

    
 
}

     