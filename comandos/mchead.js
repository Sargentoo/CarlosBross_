const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    let embed = new Discord.RichEmbed()
    
    .setTitle(`Minecraft Head`)
    .setColor("#0051FF")
    .setImage(`https://mc-heads.net/head/${args[0]}`)
    .setDescription("Link para baixar a skin: " + `https://mc-heads.net/download/${args[0]}`)
    .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
    .setTimestamp(new Date())
    message.channel.send(embed)
};

module.exports.help = {
    name: "mchead"
}