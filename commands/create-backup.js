const backup = require('discord-backup');

module.exports = {
    name: 'create-backup',
    permissions: ["ADMINISTRATOR"],
    aliases:['stwórz-backup'],
    description: "this is a ping command!",
    async execute(message, args, cmd, client, discord, ){
   

    backup.create(message.guild).then((backupData) => {

        return message.channel.send('Backup created! Here is your ID: `'+backupData.id+'`! Use -load-backup  to load the backup on another server!');

    }).catch(() => {

        return message.channel.send(':x: An error occurred, please check if the bot is administrator!');

    });

    }
}