const profileModel = require("../models/profileSchema");

module.exports = {
    name: "search",
    aliases: ["przeszukaj"],
    permissions: [],
    cooldown:86400,
    description: "Search for some coin!",
    async execute(message, args, cmd, client, discord, profileData) {

        const locations = [
            "samochód",
             "łazienka",
             "park",
             "samochód ciężarowy",
             "portfel",
             "komputer",
             "sejf",
             
        ];

        const chosenLocations = locations.sort(() => Math.random() - Math.random()).slice(0, 3);

        const filter = ({ author, content }) => message.author == author && chosenLocations.some((location) => location.toLowerCase() == content.toLowerCase());

        const collector = message.channel.createMessageCollector(filter, { max: 1, time: 25000 });

        const earnings = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;


        collector.on('collect', async (m) => {
            message.channel.send(`Znalazłeś monety ${earnings}!`);

            await profileModel.findOneAndUpdate(
                {
                    userID: message.author.id,
                },
                {
                    $inc: {
                        coins: earnings,
                    },
                }
            );
        });

        collector.on('end', (collected, reason) => {
            if (reason == "time") {
                message.channel.send('Skończył ci się czas!');
            }
        });


        message.channel.send(`<@${message.author.id}> Którą lokalizację chcesz przeszukać?\n Wpisz lokalizację w tym kanale\n \`${chosenLocations.join('` `')}\``);
    }
}