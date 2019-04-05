exports.run = async (client, message, args, prefix) =>{
    const Discord = require('discord.js')

//adicione o nome dos cargos que vc quer que use esse comando!
if(!message.member.roles.some(r=>["STAFF", "Nome de outro cargo 2"].includes(r.name)) )
return message.reply("Desculpe, você não tem permissão para usar isto!");
let member = message.mentions.members.first() || message.guild.members.get(args[0]);
if(!member)
return message.reply("Por favor mencione um membro válido deste servidor");
if(!member.kickable) 
return message.reply("Eu não posso expulsar este usuário! Eles pode ter um cargo mais alto ou eu não tenho permissões de expulsar?");

let reason = args.slice(1).join(' ');
if(!reason) reason = "Nenhuma razão fornecida";

await member.kick(reason)
.catch(error => message.reply(`Desculpe ${message.author} não consegui expulsar o membro devido o: ${error}`));
message.reply(`${member.user.tag} foi kickado por ${message.author.tag} Motivo: ${reason}`);

}