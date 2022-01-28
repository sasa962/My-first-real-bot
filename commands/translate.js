const { MessageEmbed } = require("discord.js");
const translate = require('@iamtraction/google-translate');

module.exports = {
  name: "translate",
  description: "Translates the given message.",
  permissions: ["SEND_MESSAGES"],
  aliases: ["przetłumacz"],
  async execute(message, args, cmd, client, discord, profileData) {
        const txt = args.slice(1).join(" ")
        const lang = args[0]
        if(!lang) return message.channel.send("Podaj język do przetłumaczenia.")
        if(!txt) return message.channel.send("Podaj tekst do przetłumaczenia")
        translate(txt, { to: lang }).then(res => {
            const embed = new MessageEmbed()
          .setDescription(res.text)
          .setColor("RANDOM")
          message.channel.send(embed);
    }).catch(err => {
      message.channel.send("Podaj prawdziwy język do przetłumaczenia(Język musi być podany po angielsku)\n**-przetłumacz <język> <co chesz przetłumaczyć>**")
    });
  },
};