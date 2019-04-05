const Discord = require("discord.js");
exports.run = async (client, message, args) => {

let replies = ["Você morreu!", "Você sobreviveu!", "Você levou um tiro de raspão!", "Você saiu ileso!"]

let result = Math.floor((Math.random() * replies.length));

let roleta = new Discord.RichEmbed()
.setFooter(message.author.tag, message.author.displayAvatarURL)
.setThumbnail(message.author.avatarURL)
.setColor("#0051FF")
.addField("O que será que aconteceu?", replies[result])

message.channel.send(roleta);

}
