module.exports = {
    name: 'avatar',
    aliases: ['icon', 'pfp', 'profilepic','awatar'],
    description: 'Return a user(s) avatar picture!',
    permissions:["SEND_MESSAGES"],
    async execute(message, args, cmd, client, discord, profileData){

        if (!message.mentions.users.size) {
            return message.channel.send(`**Your Avatar: ** ${message.author.displayAvatarURL({ dynamic: true })}`);
        }

        const avatar_list = message.mentions.users.map(user => {
            return `**${user.username}'s Avatar: ** ${user.displayAvatarURL({ dynamic: true })}`;
        });

        message.channel.send(avatar_list);
    }
}