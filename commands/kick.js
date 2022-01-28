module.exports = {
    name: 'kick',
    description: "This command kicks a member!",
    aliases: ['knock','kicknij','wyrzuć'],
    permissions: ["MANAGE_ROLES"],
    execute(message, args, cmd, client, discord, profileData){
        const target = message.mentions.users.first();
        if(target){
            const memberTarget = message.guild.members.cache.get(target.id);
            memberTarget.kick();
            message.channel.send(`Ten użytkownik o nicku <@${guildMember.user.id}> Został wyrzucony`);
        }else{
            message.channel.send(`Nie możesz wyrzucić tej osoby`);
        }
    }
}