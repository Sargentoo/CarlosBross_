const Discord = require('discord.js');

exports.run = (client, message, args,) =>{
  let mensagemnosay = args.join(" ");
  if(!message.member.hasPermission("ADMINISTRATOR")) {
    message.delete(5);
    return message.reply('Você não tem permissão suficiente para executar este comando.');
  }
  if(args.length == 0) {
    message.delete();
  }
  message.delete()
  message.channel.send(mensagemnosay);
}
