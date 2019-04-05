const Discord = require("discord.js");
const moment = require("moment");
moment.locale("pt-BR");

exports.run = (client, message, args) => {
var member = message.member;
    let bbUser = message.mentions.members.first();
    if(bbUser) {
        let guilda = message.guild.fetchMembers();
        member = guilda.members.get(bbUser.id);
    } else {
        bbUser = message.member;
    }

    let status;
  if(bbUser.presence.status === "online") status = `💚`
  if(bbUser.presence.status === "dnd") status = `💙`
  if(bbUser.presence.status === "idle") status = `🔮`
  if(bbUser.presence.status === "stream") status = `💜`
  if(bbUser.presence.status === "offline") status = `💤`

    let embed = new Discord.RichEmbed()
    .setDescription(`**Nome**: ${bbUser.user.tag} \n\n` +
    `**ID**: ${bbUser.id} \n \n` +
    `**Apelido**: ${bbUser.nickname ? `${bbUser.nickname}` : "**Nenhum**"} \n\n` +
    `**Jogando**: ${bbUser.presence.game ? `**${bbUser.presence.game.name}**` : "**Nada**"} **${status}**\n\n` +
    `**Conta criada à**: **\`${moment().diff(bbUser.user.createdAt, "days")} dias\`**\n\n` +
    `**Está à**: **\`${moment().diff(member.joinedAt, "days")} dias no servidor\`**\n\n` +
    `**Cargos**: ${member.roles.map(r => r).join(", ").replace("@everyone, ", "")}`)
    .setThumbnail(bbUser.user.displayAvatarURL)
    .setColor("#0051FF")

    message.channel.send(embed);
}

    exports.help = {
        name: "userinfo"
    }