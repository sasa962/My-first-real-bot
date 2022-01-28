module.exports = {
    name: "balance",
    aliases: ["bal", "bl","saldo","balans"],
    permissions: ["SEND_MESSAGES"],
    description: "Check the user balance",
    execute(message, args, cmd, client, discord, profileData) {
      message.channel.send(`Portfel: **${profileData.coins}**\n Bank: ${profileData.bank}`);
    },
  };