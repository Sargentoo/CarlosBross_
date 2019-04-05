const Discord = require("discord.js");

   exports.run = (bot,message,args) => {
    if(!message.member.roles.some(r =>["Superior"].includes(r.name)) ) {
           return message.reply('você não possuí permissão para isto.');
       }

    let embed = new Discord.RichEmbed()

    resetBot(message.channel)
        async function resetBot(channel) {
            let embed = new Discord.RichEmbed()

            .setTimestamp()
            .setThumbnail(bot.user.avatarURL)
            .setTitle('**REINICIANDO**')
            .setDescription(`:warning: ` + "| Estou reiniciando para implementações de novidades, alguns comandos podem ficar inoperantes!")
            .setColor("RANDOM")
            .setFooter(message.author.tag)
            message.channel.send(embed)
            .then(msg => bot.destroy(true))
            .then(() => bot.login('NTYxMjI5MTIyODQwMjk3NDkz.XJ61oQ.i0-NywBc5Y3UNayXBe4zi96mRQw'));
         }

    bot.on('ready', () => {
        message.reply('reiniciado com sucesso!');
    });
}
exports.help = {
    name: "reiniciar"
}