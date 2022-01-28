const profileModel = require("../models/profileSchema");
module.exports = {
  name: "deposit",
  aliases: ["dep","przechowaj"],
  permissions: ["SEND_MESSAGES"],
  description: "Deposit coins into your bank!",
  async execute(message, args, cmd, client, discord, profileData) {
    const amount = args[0];
    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Kwota wpłaty musi być liczbą całkowitą");
    try {
      if (amount > profileData.coins) return message.channel.send(`Nie masz tyle monet do wpłatyt`);
      await profileModel.findOneAndUpdate(
        {
          userID: message.author.id,
        },
        {
          $inc: {
            coins: -amount,
            bank: amount,
          },
        }
      );

      return message.channel.send(`Wpłaciłeś ${amount} monet do swojego banku`);
    } catch (err) {
      console.log(err);
    }
  },
};