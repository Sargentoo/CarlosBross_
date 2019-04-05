const Discord = require('discord.js')
module.exports.run = async(client, message, args) => {
    if(!message.member.hasPermission('MANAGE_MESSAGES'))
        return message.channel.send("Você não tem permissão para isso!")
    let channel = message.mentions.channels.first(); // Definido o canal de anúncios
    if(!channel)
        return message.channel.send('Você precisa mencionar um canal!').then(msg => { // Se não há menção do canal, ele retorna um aviso
            msg.delete(5000)  // 1000 = 1s 
            message.delete(5000)  // 1000 = 1s 
        })
//Argumentos
    let argumentos = args.slice(1).join(" ")
    if(!argumentos)
        return message.channel.send({embed: {
            title: "Imagem",
            description: "Uso correto: `.imagem #Canal <Mensagem>`",
            fields: [{
                name: "Alternativas",
                value: "`imagem`"
            },
            ],
        }}).then(msg => { // Se não há mensagem, ele retorna um aviso
            msg.delete(5000)  // 1000 = 1s 
            message.delete(5000)  // 1000 = 1s 
//Embed que vai para o canal de anúncios
})
    let embed = new Discord.RichEmbed()
    .setImage('https://media.discordapp.net/attachments/558881345603108866/561272224841990165/09a0a013a15cd6b7ae950184778bea6c.jpg')
    .setColor("#0051FF")

//Canal que irá enviar, definido para channel o canal de anúncios
    channel.send("everyone").then(msg => {
        msg.delete() // Ele enviará um everyone, e apagará rápidamente!
    })
    channel.send(embed)
    message.delete(5000)  // 1000 = 1s 
    message.channel.send("Enviado com sucesso!").then(msg => { // Dar a mensagem de sucesso, e apagar em 5 segundos
        msg.delete(5000)  // 1000 = 1s 
    })
}
//

//Configurações do módulo
module.exports.config = {
    name: 'imagem',
    aliases: ['imagem']
}