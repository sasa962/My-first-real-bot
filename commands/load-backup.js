const backup = require('discord-backup');

module.exports = {
    name: 'info-backup',
    permissions: ["ADMINISTRATOR"],
    aliases:['info-backup'],
    description: "this is a ping command!",
    async execute(message, args, cmd, client, discord, ){

    const backupID = args.join(' ');

    backup.fetch(backupID).then(() => {

        message.channel.send(':warning: All the server channels, roles, and settings will be cleared. Do you want to continue? Send `-confirm` or `cancel`!');

        const collector = message.channel.createMessageCollector((m) => m.author.id === message.author.id && ['-confirm', 'cancel'].includes(m.content), {
            time: 60000,
            max: 1
        });
        collector.on('collect', (m) => {
            const confirm = m.content === '-confirm';
            collector.stop();
            if (confirm) {

                backup.load(backupID, message.guild).then(() => {

                    return message.author.send('Backup loaded successfully!');
            
                }).catch((err) => {
            
                    if (err === 'No backup found')
                        return message.channel.send(':x: No backup found for ID '+backupID+'!');
                    else
                        return message.author.send(':x: An error occurred: '+(typeof err === 'string') ? err : JSON.stringify(err));
            
                });

            } else {
                return message.channel.send(':x: Cancelled.');
            }
        })

        collector.on('end', (collected, reason) => {
            if (reason === 'time')
                return message.channel.send(':x: Command timed out! Please retry.');
        })

    }).catch(() => {
        return message.channel.send(':x: No backup found for ID '+backupID+'!');
    });

}
}