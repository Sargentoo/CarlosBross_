const Discord = require('discord.js');

module.exports.run = async (client, message, args) => {

message.channel.send(new Discord.RichEmbed().setDescription("**Suporte** - Sargento Loja\n\n`💣- Dúvidas sobre compras`\n`❓ - Dúvidas sobre o servidor`\n`🔨 - informações sobre parceria`\n")).then(async msg => {   
    await msg.react("💣")
    await msg.react("❓")
    await msg.react("🔨")
    const collector = msg.createReactionCollector((r, u) => (r.emoji.name === "💣", "❓", "🇨" && u.id === message.author.id), { time: 30000 })
    collector.on("collect", async r => {
        let title
        switch (r.emoji.name) {
            case "💣":
                title = "Suporte de compras"
                break
            case "❓":
                title = "Suporte-loja"
                break
            case "🔨":
                title = "Informações sobre parceria"
        }
        let category = message.guild.channels.find(c => c.name === "❓ ➜ suporte")
        if (!category || category.type !== "category")
            category = await message.guild.createChannel("❓ ➜ suporte", "category")
        let channel = await message.guild.createChannel(`ticket-${title}`, "text", [{
            id: client.user.id,
            allowed: ["VIEW_CHANNEL", "MANAGE_CHANNELS"]
        }, {
            id: message.author.id,
            allowed: ["VIEW_CHANNEL", "SEND_MESSAGES"]
        }, {
            id: message.guild.roles.find(c => c.name === "Equipe").id,
            allowed: ["VIEW_CHANNEL", "SEND_MESSAGES"]
        }, {
            id: message.guild.defaultRole.id,
            denied: Discord.Permissions.ALL
        }])
        await channel.setParent(category.id)
    })
  })
}