const Discord = require("discord.js");
const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

module.exports.run = async (bot, message, args) => {

    message.react('🛡');
    message.reply("Enviei uma mensagem para você no privado.")
    await message.author.createDM()
    message.member.send(`📣 **DENÚNCIA**:\nOlá, Siga os próximos passos para enviar uma denúncia.\nAntes de começarmos, leia atentamente algumas informações importantes:\n\n**- Enviar denúncias falsas ou qualquer mensagem que não seja uma denúncia resultará em punição para você.**\n**- Em caso de denúncias onde um jogador esteja sendo acusado de Hack/Scripts, a prova deve ser em vídeo.**\n**- Só envie denúncias com provas válidas, que mostrem a tela inteira do seu jogo.**\n\nPara cancelar, digite cancelar a qualquer momento. Vamos lá:\n👉 **Digite o nickname do jogador acusado:**`)
    let collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {time: 1000 * 50, max: 1})
    collector.on('collect', a => {
        let acusado = a.content.toLowerCase()
    message.author.send("Ok, vamos continuar.\n**- Informe o motivo da denúncia**")
    let collector2 =  message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id,{time: 1000 * 50,max: 1})
    collector2.on('collect', b => {
        let motivo = b.content.toLowerCase()
    message.author.send("Quase lá! Agora precisamos de uma prova.\nFaça uma print (em caso de chat) ou grave um vídeo (em caso de hack) e upe no Lightshot ou Imgur (print) ou no Youtube (vídeo).\n**- Mande o link da prova agora:**")
    let collector3 =  message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id,{time: 1000 * 50,max: 1})
    collector3.on('collect', c => {
        let prova = c.content.toLowerCase()
    message.author.send(`Para finalizar, verifique as informações da sua denúncia:\n\n**Acusado**: ${acusado}\n**Motivo:** ${motivo}\n**Prova:** ${prova}\n**Author:** Você\n\n**- Se as informações estiverem corretas, digite CONFIRMAR**\n*(Caso contrário, digite qualquer coisa e refaça a denúncia novamente)*`)
    let collector4 =  message.author.dmChannel.createMessageCollector(d => d.author.id == message.author.id,{time: 1000 * 50,max: 1})
    collector4.on('collect', d => {
        let nada = d.content.toLowerCase()
        message.author.send("🔹 **Denúncia enviada!**\nAgradecemos por ajudar a nossa equipe.\nIremos analisar o report o quanto antes.")

        let avatar = message.author.avatarURL
        let ReportEmbed = new Discord.RichEmbed()
        .setAuthor(`Denúncia | ${message.guild.name}`, bot.user.displayAvatarURL)
        .setDescription(`**Author:** <@${message.author.id}>\n\n**Acusado:** ${acusado}\n\n**Motivo:** ${motivo}\n\n**Prova:** ${prova}`)
        .setColor("#0051FF")
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.author.username}`, `${message.author.avatarURL}`) //:-;

        let sim = message.guild.emojis.find('name', "sim");
        let nao = message.guild.emojis.find('name', "nao");

        bot.channels.get('563047698689687577').send(ReportEmbed).then(msg => msg.react(sim).then(r => msg.react(nao)));
    })      
    })
    })
    })

}

module.exports.help = {
    name: "report",
  }