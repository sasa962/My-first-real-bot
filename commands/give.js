const profileModel = require("../models/profileSchema");
module.exports = {
  name: "give",
  aliases: ["dodaj"],
  permissions: ["ADMINISTRATOR"],
  description: "give a player some coins",
  async execute(message, args, cmd, client, discord, profileData) {
    if (message.member.id != "597504718536704001") return message.channel.send(`Przepraszamy, tylko **Administrator** może uruchomić to polecenie 😔`);
    if (!args.length) return message.channel.send("Musisz wspomnieć o graczu, aby dać mu monety");
    const amount = args[1];
    const target = message.mentions.users.first();
    if (!target) return message.channel.send("Ten użytkownik nie istnieje");

    if (amount % 1 != 0 || amount <= 0) return message.channel.send("Kwota wpłaty musi być liczbą całkowitą");

    try {
      const targetData = await profileModel.findOne({ userID: target.id });
      if (!targetData) return message.channel.send(`Ten użytkownik nie istnieje w db`);

      await profileModel.findOneAndUpdate(
        {
          userID: target.id,
        },
        {
          $inc: {
            coins: amount,
          },
        }
      );

      return message.channel.send(`Ten gracz otrzymał swoje monety! ${amount} monet!`);
    } catch (err) {
      console.log(err);
    }
  },
};