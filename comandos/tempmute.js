const Discord = require("discord.js");
const ms = require("ms");

module.exports.run = async (client, message, args) => {
var razao = args.slice(2).join(" ")
  let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
  if(!tomute) return message.reply("Não foi possível encontrar o usuário.");
  if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Você não tem permissão!");
  let muterole = message.guild.roles.find(`name`, "Silenciado");
  if(!muterole){
    try{
      muterole = await message.guild.createRole({
        name: "Mutado",
        color: "#1111",
        permissions:[]
      })
      message.guild.channels.forEach(async (channel, id) => {
        await channel.overwritePermissions(muterole, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false
        });
      });
    }catch(e){
      console.log(e.stack);
    }
  }

  let mutetime = args[1];
  if(!mutetime) return message.reply("Você não especificou um tempo!");
  var canal = message.guild.channels.find("name", "🏮   punições");
  if (!canal) return; canal.send({
embed: { 
description:`:mute: Membro Silenciado.\nUsuário mutado com sucesso!\n \n \n🔰 Autor:\n<@${message.author.id}>\n \n👤  Usuário:\n<@${tomute.id}>\n \n🕒 Duração:\n${ms(ms(mutetime))}\n \n📝 Motivo:\n ${razao}`, 
color: 0x32242
}
});
  await(tomute.addRole(muterole.id));

  setTimeout(function(){
    tomute.removeRole(muterole.id);
    var canal = message.guild.channels.find("name", "🏮   punições");
    if (!canal) return; canal.send(`Parece que o tempo do <@${tomute.id}>  de mutado acabo, cuidado para não ser mutado de novo.`);
  }, ms(mutetime));
}

module.exports.help = {
  name: "tempmute"
}