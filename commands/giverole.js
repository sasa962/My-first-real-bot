const Discord = require("discord.js");

module.exports = {
  name: "giverole",
  description: "Give roles to users",
  aliases: ['wypierdol','zbanuj','zniscz'],
  permissions: ["MANAGE_ROLES"],
 async execute(message, args, cmd, client, discord, profileData) {
    const user = message.mentions.members.first();
    if (!user)
      return message.channel.send(
        "Podaj użytkownika, któremu chcesz przypisać rolę"
      );
    const name = args.slice(1).join(" ");
    if (!name) return message.channel.send("Wpisz nazwę roli");
    const role = message.mentions.roles.first();
    if (!role) return message.channel.send("Nie można znaleźć wskazanej roli");
    await user.roles.add(role),
      message.channel.send(`${user} dostał rangę${role} `);
  },
};