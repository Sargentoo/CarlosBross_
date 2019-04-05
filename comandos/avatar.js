exports.run = async (client, message, args, prefix) =>{
    const Discord = require('discord.js')

let usuario = message.mentions.users.first() || client.users.get(args[0]) || message.author;
    
let av = usuario.displayAvatarURL;
if(av.endsWith('.gif')) {
  av = `${usuario.displayAvatarURL}?size=2048`
}
  
let embed = new Discord.RichEmbed()
.setColor("#0051FF")
.setDescription(`**Avatar de:** [**${usuario.username}**](${av})`)
.setImage(av)
message.channel.send(embed)

}