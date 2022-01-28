const thanksSchema = require('../models//thanks-schema')

module.exports = {
      name: 'thx',
     
      description: 'Thanks a user for helping you',
      aliases: ["podziękuj"],
      permissions: ["SEND_MESSAGES"],
      async execute(message, args, cmd, client, discord, profileData) {

    const target = message.mentions.users.first()
    if (!target) {
      message.reply('Komu chcesz podziękować')
      return
    }

    const { guild } = message
    const guildId = guild.id
    const targetId = target.id
    const authorId = message.author.id
    const now = new Date()

    if (targetId === authorId) {
      message.reply('Nie możesz podziękować samemu sobie')
      return
    }

    const authorData = await thanksSchema.findOne({
      userId: authorId,
      guildId,
    })

    if (authorData && authorData.lastGave) {
      const then = new Date(authorData.lastGave)

      const diff = now.getTime() - then.getTime()
      const diffHours = Math.round(diff / (1000 * 60 * 60))

      const hours = 24
      if (diffHours <= hours) {
        message.reply(
          `Już podziękowałeś tej osobie ${hours} temu.`
        )
        return
      }
    }

    // Update the "lastGave" property for the command sender
    await thanksSchema.findOneAndUpdate(
      {
        userId: authorId,
        guildId,
      },
      {
        userId: authorId,
        guildId,
        lastGave: now,
      },
      {
        upsert: true,
      }
    )

    // Increase how many thanks the target user has had
    const result = await thanksSchema.findOneAndUpdate(
      {
        userId: targetId,
        guildId,
      },
      {
        userId: targetId,
        guildId,
        $inc: {
          received: 1,
        },
      },
      {
        upsert: true,
        new: true,
      }
    )

    const amount = result.received
    message.reply(
      `Już podziękowałeś <@${targetId}>! Teraz ona ma ${amount} podziękowań.`
    )
  }
}