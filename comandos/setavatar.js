const Discord = require('discord.js')
module.exports.run = async (client, message, args) => {

    if (message.author.id === '536237333960196120') {
        client.user.setAvatar(args.join(' ')).then(async () => {
            await message.reply(client.user.displayAvatarURL)
        })
      } else {
      message.channel.send('Você não pode usar este comando.') 
      };

} 
