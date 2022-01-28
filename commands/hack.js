const ms = module.require("ms");

module.exports = {
  name: "hack",
  description: "Another Fun Command",
  permissions: ["SEND_MESSAGES"],
    aliases:['hackuj'],
    async execute(message, args, cmd, client, discord, ) {
    if (!args[0]) {
      return message.channel.send(
        "Woah.... Slow Down!! Who are we hacking..??"
      );
    }
    const tohack = message.mentions.members.first();
    let msg = await message.channel.send(`Hakowanie ${tohack.displayName}....`);

    let time = "5s";
    setTimeout(function () {
      msg.edit(`Szukanie ${tohack.displayName} E-maila i hasła.....`);
    }, ms(time));

    let time1 = "6s";
    setTimeout(function () {
      msg.edit(`E-Mail: ${tohack.displayName}@gmail.com \nhasło:  ${tohack.displayName}123`);
    }, ms(time1));

    let time2 = "9s";
    setTimeout(function () {
      msg.edit("Szukanie innych Kont.....");
    }, ms(time2));

    let time3 = "15s";
    setTimeout(function () {
      msg.edit("Konfigurowanie konta Roblox.....");
    }, ms(time3));

    let time4 = "21s";
    setTimeout(function () {
      msg.edit("Hakowanie konta Roblox......");
    }, ms(time4));

    let time5 = "16s";
    setTimeout(function () {
      msg.edit("Zchakowane konto Roblox!!");
    }, ms(time5));
    
    let time6 = "20s";
    setTimeout(function () {
      msg.edit("📞Dzwonienie do Ruska.....");
    }, ms(time6));

    let time7 = "15s";
    setTimeout(function () {
      msg.edit("Hakowanie konta Steam......");
    }, ms(time7));

    let time8 = "25s";
    setTimeout(function () {
      msg.edit("Zchakowane konto Steam!!");
    }, ms(time8));

    let time9 = "30s";
    setTimeout(function () {
      msg.edit("Zbieranie informacji.....");
    }, ms(time9));

    let time10 = "30s";
    setTimeout(function () {
      msg.edit("Sprzedawanie danych do CBA....");
    }, ms(time10));

    let time11 = "41s";
    setTimeout(function () {
      msg.edit(`Skończyłeś hakować ${tohack.displayName}`);
    }, ms(time11));
  },
};