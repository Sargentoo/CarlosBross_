const Discord = require('discord.js');
const client = new Discord.Client();
module.exports.run = (client, message, args) => {

    const moment = require("moment")
    moment.locale("pt-BR")
    let online = message.guild.members.filter(a => a.presence.status == "online").size;
    let ocupado = message.guild.members.filter(a => a.presence.status == "dnd").size;
    let ausente = message.guild.members.filter(a => a.presence.status == "idle").size;
    let offline = message.guild.members.filter(a => a.presence.status == "offline").size;
    let bot = message.guild.members.filter(a => a.user.bot).size;
    let totalmembros = message.guild.memberCount;
    let canaistexto = message.guild.channels.filter(a => a.type === "text").size;
    let canaisvoz = message.guild.channels.filter(a => a.type === "voice").size;
    let cargos = message.guild.roles.map(a => a).join(", ")
        const embed = new Discord.RichEmbed()
        .setTitle(`**Informações do servidor:** **${message.author.tag}**`)
        .setColor("#FF00FF")
        .setThumbnail(message.guild.iconURL)
        .setTimestamp()
        .setDescription("📑 **Informações do servidor:**")
        .addField('▫Criador do servidor👑:', `<@${message.guild.owner.id}>`)
        .addField('▫Criado em🗓:', moment(message.guild.createdAt).format('LLLL'))
        .addField(`:white_small_square:Membros👬: `, `**Online:** ${online}\n**Ausente:** ${ausente}\n **Ocupado:** ${ocupado}\n **Offline:** ${offline}\n **Bots:** ${bot}`)
        .addField(`:white_small_square:Canais📑: `, `**Texto:** ${canaistexto}\n **Voz:** ${canaisvoz}`)
        .setFooter(`Comando solicitado por: ${message.author.tag}`, `${message.author.avatarURL}`)
        message.channel.send(embed)
}

module.exports.help = {
    name: "status"
}