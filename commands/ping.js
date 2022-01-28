const { MessageEmbed } = require('discord.js');
const quick = require('quick.db');

module.exports = {
  name: 'ping',
  description: 'Get bot ping.',
  permissions:[],
  async execute(message, args, cmd, client, discord, ) {
    const ping = await getDBPingData();
    const messagePing = Date.now(); // start before message sent
    const msg = await message.channel.send('Loading...');
    const endMessagePing = Date.now() - messagePing; // end of message sent

    const embed = new MessageEmbed() // build message embed
      .setDescription(
        `
        Dane ping bazy danych:
         - Pobierz ping: \`${ping.endGet}ms\`
         - Wright ping: \`${ping.endWright}ms\`
         - Średni ping: \`${ping.avarage}ms\`
         Ping wiadomości: \`${endMessagePing}ms\` 
      `
      )
      .setColor('GREEN')
      .setTimestamp();

    msg.edit({
      content: '',
      embed,
    }); // edit message content
  },
};

async function getDBPingData() {
  // get the fetch data ping
  const startGet = Date.now();
  await quick.get('QR=.');
  const endGet = Date.now() - startGet;

  // get the wright data ping
  const startWright = Date.now();
  await quick.set('QR=.', Buffer.from(startWright.toString()).toString('base64'));
  const endWright = Date.now() - startWright;

  // avrage ping time
  const avarage = (endGet + endWright) / 2;
  try {
    quick.delete('QR=.'); // try deleteing
  } catch (error) {}
  return { endGet, endWright, avarage }; // return the ping data
}