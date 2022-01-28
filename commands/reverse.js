const Discord = module.require("discord.js");

module.exports = {
  name: "reverse",
  description: "Reverse the text entered",
  permissions: ["SEND_MESSAGES"],
    aliases:['cofnij'],
    async execute(message, args, cmd, client, discord, ) {
    let str = args.join(" ");
    if (!str) {
      return message.channel.send("Enter some text to be reversed");
    }
    message.channel.send(str.split("").reverse().join(""));
  },
};