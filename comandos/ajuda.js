const Discord = require("discord.js");  
exports.run = (client, message, args) => {

   message.delete();
   let Discord = require('discord.js');
   let config = require('../config.json');
   let embed = new Discord.RichEmbed()
   .setColor("#0051FF")
   .setDescription('📑 **Meus comandos.**')
   .setDescription('Utilize as reações para visualizar os comandos.')
   .addField('👮 Comandos de moderação!','**Comandos para moderação!**')
   .addField('🎉 Comandos de diversão!','**Comandos para se divertir e para ajudar!**')
   .setFooter(`Solicitado por ${message.author.tag}`, message.author.avatarURL)
   .setTimestamp(new Date())
   let embed1 = new Discord.RichEmbed()

   .setColor("#0051FF")
   .setDescription('👮 **Comandos da Moderação**')
   .setDescription('Utilize as reações para visualizar os comandos.')
   .addField(`${config.prefix}apagar`,`- Para **limpar** o chat.`)
   .addField(`${config.prefix}ban`,`-  Para **banir** um membro.`)
   .addField(`${config.prefix}kick`,`- Para **expulsar** um membro.`)
   .addField(`${config.prefix}say`,`- Para **enviar** uma **mensagem** com o bot.`)
   .addField(`${config.prefix}tempmute`,`- Para **mutar** um membro **temporariamente** com o bot.`)
   .addField(`${config.prefix}anunciar`,`- Para **anunciar** um **anúncio** com o bot.`)
   .addField(`${config.prefix}changelog`,`- Para **atualizar** os membros sobre as novidades.`)
   .setFooter(`Solicitado por ${message.author.tag}`, message.author.avatarURL)
   .setTimestamp(new Date())
let embed2 = new Discord.RichEmbed()
   .setColor("#0051FF")
   .setDescription('🎉 **Comandos de Diversão**')
   .setDescription('Utilize as reações para visualizar os comandos.')
   .addField(`${config.prefix}serverinfo`,`para ver algumas informações sobre o servidor.`)
   .addField(`${config.prefix}ping`,`para **ver** meu ping.`)
   .addField(`${config.prefix}avatar`,`para **ver** seu avatar.`)
   .addField(`${config.prefix}mcskin`,`para **ver** sua skin no Minecraft.`)
   .addField(`${config.prefix}mchead`,`para **ver** somente sua cabeça do Minecraft.`)
   .addField(`${config.prefix}convite`,`para **ver** o convite oficial do nosso servidor.`)
   .addField(`${config.prefix}userinfo`,`para **ver** informações sobre o seu perfil.`)
   .addField(`${config.prefix}ticket`,`caso tenha alguma **dúvida** relacionada á loja.`)
   .addField(`${config.prefix}abracar`,` para **abraçar** alguém.`)
   .addField(`${config.prefix}roleta`,` para **desafiar** sua sorte.`)
   .addField(`${config.prefix}divulgador`,` para **ver** quantos membros você convidou.`)
   .setFooter(`Solicitado por ${message.author.tag}`, message.author.avatarURL)
   .setTimestamp(new Date())

message.member.send(embed).then(async msg => {
   await msg.react('👮');
   await msg.react('🎉');
   await msg.react('⬅')
const collector = msg.createReactionCollector((r, u) => (r.emoji.name === '👮', '🎉', '⬅') && (u.id !== client.user.id && u.id === message.author.id))
collector.on("collect", r=>{
   switch (r.emoji.name) {
   case '👮': 
   msg.edit(embed1)
   break;
   case'🎉':
   msg.edit(embed2)
   break;
   break;
   case'⬅':
   msg.edit(embed)
   }
   })
   message.channel.send(`${message.author}, por gentileza, olhe sua **DM**!`);

 })
}                 