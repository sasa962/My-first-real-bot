const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
    name: 'unmute',
    description: 'Unmutes the specified user.',
    aliases: ['odcisz',],
    permissions: ["MANAGE_ROLES"],
    async execute(message, args, cmd, client, discord, profileData){

        const member = message.mentions.members.first();
        let target = message.guild.members.cache.get(member.id)
        const role = message.guild.roles.cache.find(role => role.name === 'Muted')

        target.roles.remove(role.id);
        message.reply('Odciszony!')


    }
}