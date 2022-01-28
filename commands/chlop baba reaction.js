const Discord = require ('discord.js')
module.exports = {
    name: 'reactionroleplec',
    description: "Sets up a reaction role message!",
    permissions:["ADMINISTRATOR"],
    async execute(message,args, cmd, client, Discord) {
        const channel = '927538656124751882';
        const chłopiecRole = message.guild.roles.cache.find(role => role.name === "chłopiec");
        const dziewczynaRole = message.guild.roles.cache.find(role => role.name === "dziewczyna");
 
        const chłopiecEmoji = '👨';
        const dziewczynaEmoji = '👧';
 
        let embed = new Discord.MessageEmbed()
            .setColor('#e42643')
            .setTitle('Wybierz drużynę do gry!')
            .setDescription('Wybór drużyny pozwoli ci na interakcję z kolegami z drużyny!\n\n'
                + `${chłopiecEmoji} dla męskiej drużyny\n`
                + `${dziewczynaEmoji} dla kobiecej drużyny`);
 
        let messageEmbed = await message.channel.send(embed);
        messageEmbed.react(chłopiecEmoji);
        messageEmbed.react(dziewczynaEmoji);
 
        client.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
 
            if (reaction.message.channel.id == channel) {
                if (reaction.emoji.name === chłopiecEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(chłopiecRole);
                }
                if (reaction.emoji.name === dziewczynaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(dziewczynaRole);
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
                if (reaction.emoji.name === chłopiecEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(chłopiecRole);
                }
                if (reaction.emoji.name === dziewczynaEmoji) {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(dziewczynaRole);
                }
            } else {
                return;
            } 
            
        });
    }

    
 
}

     