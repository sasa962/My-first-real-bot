module.exports = {
    name: 'ban',
    description: "This command ban a member!",
    aliases: ['wypierdol','zbanuj','zniscz'],
    permissions: ["MANAGE_ROLES"],
    execute(message, args, cmd, client, discord, profileData){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.ban();
            message.channel.send(`Ten użytkownik o nicku <@${guildMember.user.id}> zbanowany`);
        }else{
            message.channel.send(`Nie możesz zbanować tej osoby`);
        }
    }
}