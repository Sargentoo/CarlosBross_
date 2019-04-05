const Discord = require("discord.js");
exports.run = (client, message, args) => {
    const mensagem = args.join(" ");
    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
   
    message.channel.send(`${message.author}`)
    let pEmbed = new Discord.RichEmbed()
        .setTitle("⚛ REQUISITOS:")
        .setDescription("Vizualize o **REQUISITO**, nesta tabela: ")
        .addField('☪ Requisitos: teste do teste teste' )
        .setFooter(`${message.author.tag}`, message.author.displayAvatarURL)
        .setColor("RANDOM").setTimestamp()

        message.channel.send(pEmbed);
}