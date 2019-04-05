const Discord = require("discord.js");
const sleep = time => new Promise(resolve => {
    setTimeout(resolve, time)
})

module.exports.run = async (client, message, args) => {

    message.react('💡');
    message.reply("Enviei uma mensagem para você no privado.")
    await message.author.createDM()
    message.member.send("💡 **SUGESTÃO**\nEntão você tem boas ideias, não é mesmo?\nFicamos felizes que você queira contribuir conosco.\n\n👉 **Digite a sua sugestão, procurando explicá-la detalhadamente:**")
    let collector =  message.author.dmChannel.createMessageCollector(a => a.author.id == message.author.id, {time: 1000 * 50, max: 1})
    collector.on('collect', a => {
        let sugestão = a.content.toLowerCase()
    message.author.send("Certo. Agora diga por que a sua sugestão deveria ser aceita.\n👉 **Explique por que devemos implementar a sua sugestão:**")
    let collector2 =  message.author.dmChannel.createMessageCollector(b => b.author.id == message.author.id,{time: 1000 * 50,max: 1})
    collector2.on('collect', b => {
        let porque = b.content.toLowerCase()
    message.author.send("Ok, tudo pronto. Sua sugestão está pronta para ser enviada.\nRecomendamos que verifique se está tudo como você deseja.\n\n👉 **Se estiver tudo certo, digite `CONFIRMAR` para enviar a sugestão.**\n*(Caso contrário, digite qualquer coisa e refaça a sugestão novamente)*")
    let collector3 =  message.author.dmChannel.createMessageCollector(c => c.author.id == message.author.id,{time: 1000 * 50,max: 1})
    collector3.on('collect', c => {
        let idade = c.content.toLowerCase()
    message.author.send("💡 **Sugestão enviada!**\nAgradecemos por contribuir com suas ideia.\nNossa equipe irá analisar a sua ideia atentamente.")
        let avatar = message.author.avatarURL
        let SugestãoEmbed = new Discord.RichEmbed()
        .setAuthor(`Sugestão | ${message.guild.name}`, client.user.displayAvatarURL)
        .setDescription(`Sugestão:\n${sugestão}\n\nPor que deve ser aceita?\n${porque}`)
        .setColor("#0051FF")
        .setTimestamp()
        .setThumbnail(avatar)
        .setFooter(`${message.author.username}`, `${message.author.avatarURL}`)

        let sim = message.guild.emojis.find('name', "sim");
        let nao = message.guild.emojis.find('name', "nao");
        
        client.channels.get('552923457000570919').send(SugestãoEmbed).then(msg => msg.react(sim).then(r => msg.react(nao)));
    })
    })
    })

}

module.exports.help = {
    name: "sugerir",
  }