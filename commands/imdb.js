const { MessageEmbed } = require("discord.js");
const imdb = require("imdb-api");

module.exports = {
  name: "imdb",
  description: "Get the information about series and movies",
  permissions:["SEND_MESSAGES"],
  aliases: ["recenzja"],
  async execute(message,args, cmd, client, Discord){
    try {
        const name = args.join(" ");
        if (!name) {
          return message.channel.send("Please Give the name of a movie or series!");
        }
    
        const imob = new imdb.Client({ apiKey: "5e36f0db" });
    
        let movie = await imob.get({ name: args.join(" ") });
    
        const embed = new MessageEmbed()
          .setTitle(movie.Title)
          .setColor("RANDOM")
          .setThumbnail(movie.poster)
          .setDescription(
            `Description: \`${movie.plot}\`\nRatings: \`${movie.ratings}\`\nCountry: \`${movie.country}\`\nLanguages: \`${movie.languages}\`\nType: \`${movie.type}\``
          );
    
          message.channel.send(embed);
  }
  catch (error) {
    message.channel.send(`Podaj prawdziwy film!`).then(() => console.log(error));
  }
}
};