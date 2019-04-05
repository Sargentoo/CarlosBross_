exports.run = async (client, message, args, prefix) =>{
    const Discord = require('discord.js')

    if(!message.member.hasPermission("ADMINISTRATOR")) {
      message.delete();
      return message.reply('Você não tem permissão suficiente para executar este comando.');
    }
    if(args.length == 0) {
      message.delete();
    }
    
    const deleteCount = parseInt(args[0], 10);
    if(!deleteCount || deleteCount < 2 || deleteCount > 100)
      return message.reply("Por favor, forneça um número entre 2 e 100 para o número de mensagens a serem excluídas");
    
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Não foi possível deletar mensagens devido a: ${error}`));

}