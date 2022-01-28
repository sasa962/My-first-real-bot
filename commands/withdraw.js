const profileModel = require("../models/profileSchema");
module.exports = {
  name: "withdraw",
  aliases: ["wd"],
  permissions: ["SEND_MESSAGES"],
  description: "withdraw coins from your bank",
  async execute(message, args, cmd, client, discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Wypłacana kwota musi być liczbą całkowitą");

    try {
      if (amount > profileData.bank) return message.channel.send(`Nie masz tyle monet do wypłaty`);

      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: amount,
            bank: -amount,
          },
        }
      );

      return message.channel.send(`Wypłaciłeś ${amount} monet do swojego portfela`);
    } catch (err) {
      console.log(err);
    }
  },
};