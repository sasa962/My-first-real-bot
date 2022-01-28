var Scraper = require('images-scraper');

const google = new Scraper({
    puppeteer: {
      headless: true
    }
  })

module.exports = {
    name:'image',
    description:'to wysyła zdjęcia',
    permissions:["SEND_MESSAGES"],
    aliases:['zdjęcie'],
    async execute(message, args, cmd, client, discord, profileData){
        const image_query = args.join(' ');
        if(!image_query) return message.channel.send('Proszę wpisz zdjęcię');

        const image_results = await google.scrape(image_query, 1);
        message.channel.send(image_results[0].url);
    }
}