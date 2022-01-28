const { MessageEmbed } = require("discord.js");
const math = require("mathjs");
const Color = `RANDOM`;

module.exports = {
  name: "math",
  aliases: ["oblicz",],
  permissions: ["SEND_MESSAGES"],
  description: "Deposit coins into your bank!",
  async execute(message, args, cmd, client, discord, profileData) {
    try {
      if (!args[0]) return message.channel.send("Please Give Me Equation!");

      const embed = new MessageEmbed()
        .setColor(`${Color}`)
        .setTitle(`Result`)
        .setDescription(math.evaluate(args.join(" ")))
        .setTimestamp();

      message.channel.send(embed);
    } catch (error) {
      message.channel.send(`Please Give Me Valid Equation | Try Again Later!`).then(() => console.log(error));
    }
  }
};