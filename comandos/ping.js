exports.run = async (client, message, args, prefix) =>{
    const Discord = require('discord.js')

    const m = await message.channel.send("Ping?");
    m.edit(`Pong! A Latência é ${m.createdTimestamp - message.createdTimestamp}ms. A Latencia da API é ${Math.round(client.ping)}ms`);

}