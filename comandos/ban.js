const Discord = require("discord.js");
exports.run = async (client, message, args) => {
if(!message.member.roles.some(r =>["STAFF"].includes(r.name)) )
    return message.reply("Desculpe, você não tem permissão para usar isto!");
let usuario = message.mentions.users.first();
if(!usuario) return message.channel.send(`Você esqueceu de **mencionar** o membro que deseja banir!`);

let razao = args.slice(1).join(" ")
if(!razao) return message.channel.send(`Você se esqueceu de colocar a **razão**!`);

    const embed = new Discord.RichEmbed()
    .setTitle("Banir Usuário")
    .setColor("RANDOM")
    .setDescription(`Você deseja banir ${usuario} ?`)
    message.channel.send(embed).then(msg => {
        msg.react("👍");

        let filtro = (reaction, usuario) => reaction.emoji.name === "👍" && usuario.id === message.author.id;
        const coletor = msg.createReactionCollector(filtro, {max: 1, time: 100000000});

        coletor.on("collect", () => {
            message.guild.member(usuario).ban(razao);
            const canalban = message.guild.channels.get("561676944228483092");
            const embedban = new Discord.RichEmbed()
            .setTitle(`⚙ **Punição**`)
            .setDescription(`**Usuário punido**: ${usuario} \n **Autor**: ${message.author} \n **Motivo**: ${razao}`)
            canalban.send(embedban);
        })
    });
};
exports.help = {
    name: "ban",
    aliases: ["ban","banir"]
}