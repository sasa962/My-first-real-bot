
const thanksLeaderboardSchema = require('../models//thanks-leaderboard-schema')

module.exports =  {
      name: 'setleaderboard',
      aliases:["setlead"],
      description: 'Sets up a thanks leaderboard',
      permissions: ["ADMINISTRATOR"],
      async execute(message, args, cmd, client, discord, profileData) {
    const { guild, channel } = message
    const guildId = guild.id
    const channelId = channel.id

    await thanksLeaderboardSchema.findOneAndUpdate(
      {
        _id: guildId,
        channelId,
      },
      {
        _id: guildId,
        channelId,
      },
      {
        upsert: true,
      }
    )

    message.reply('Thanks leaderboard set!').then((message) => {
      message.delete({
        timeout: 1000 * 5,
      })
    })
    message.delete()
  }
}