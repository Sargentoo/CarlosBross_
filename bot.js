const Discord = require("discord.js"); //baixar a lib
const client = new Discord.Client(); 
const config = require("./config.json"); 

client.on('ready', () => {
console.log('Online com sucesso.')


  let status = [
    {name: '🎩 Assistindo os vídeos do Carlos.', type: 'STREAMING', url: 'https://twitch.tv/iluccaz_owna'},
    {name: '👥 Desenvolvido por: Sérgio#6316.', type: 'STREAMING', url: 'https://twitch.tv/iluccaz_owna'}, 
  ]; 


  function setStatus() {
      let randomStatus = status[Math.floor(Math.random() * status.length)];
      client.user.setPresence({game: randomStatus});
  }

  setStatus();
  setInterval(() => setStatus(), 10000);
});

// evento de message
client.on("message", message => {
  // quando alguém falar
      if (message.author.bot) return;
  // se o usuário for um bot o bot não vai responder
      if (message.channel.type == "dm") return;
  // se for na dm (mensagem privada) ele não responde
      if (!message.content.toLocaleLowerCase().startsWith(config.prefix)) return;
  // se não iniciar com prefixo ele não responde
// ignorar o prefixo na hora de criar o arquivo na pasta
      let comando = message.content.toLowerCase().split(" ")[0];
      comando = comando.slice(config.prefix.length);
  
      let args = message.content.split(" ").slice(1);
  // args é tudo depois do comando
  // !comando args[0] args[1] args[2] args[3] args[4] e assim vai
      try {
  // executarComando
          executarComando = require(`./comandos/${comando}.js`)
          executarComando.run(client, message, args);
      } catch (e) {
  // se der algum erro ele mostra no console
          console.log(e);
      }// 
});

client.on("guildCreate", guild => {
  console.log(`O bot entrou nos servidor: ${guild.name} (id: ${guild.id}). População: ${guild.memberCount} membros!`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});

client.on("guildDelete", guild => {
  console.log(`O bot foi removido do servidor: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Estou em ${client.guilds.size} servidores`);
});


    client.on('guildMemberAdd', async (member, msg) => { //Começo do evendo de quando alguem entra

      const bv = new Discord.RichEmbed()
      .setTitle(`<a:teste:563073500752117766> | Bem-vindo(a) ${member.user.tag}`)
        .setTimestamp()
        .setColor("#0051FF")
        .setThumbnail(member.user.displayAvatarURL)
        .setDescription(` 
      \n **|** Visite o chat <#552181797333499914> \n
       **|** Antes de digitar algo leia nossas <#552069791104368651> \n
       **|** Depois saber as __regras__ você pode digitar no <#551817732853858305>`)
        .setFooter(`${member.user.tag} Acabou de entrar no sevidor `, member.user.displayAvatarURL)
    
        let canalbv = client.channels.get("552068754482135040")
 canalbv.send(bv)
      
});

client.on('guildMemberRemove', async (member, msg) => { //Começo do evendo de quando alguem entra

  const bv = new Discord.RichEmbed()
    .setTitle(`<a:saida:563357977659047936> | Tchau ${member.user.tag}`)
    .setTimestamp()
    .setColor("#0051FF")
    .setThumbnail(member.user.displayAvatarURL)
    .setDescription(`\n 
    **|** Acabou de sair do servidor. \n 
    **|** Volte sempre.`)
    .setFooter(`${member.user.tag} Acabou de sair no sevidor `, member.user.displayAvatarURL)

  await client.channels.get('552068754482135040').send(bv);
  
});



client.on("guildMemberAdd", function(member) {
  let role = member.guild.roles.find("name", "👥 ● Membros");
  member.addRole(role).catch(console.error);
});

client.on('message', message => {
  if(message.content.includes('<@551821435493154846>') || message.content.includes('<@!551821435493154846>')) {
      const embed = new Discord.RichEmbed()

      .setColor("#0051FF")
      .setTitle(`Olá ${message.author.username} está perdido?`)
      .setDescription('Dirija-se a <#552067767788896257> e digite: ' + '`!ajuda`')
      .setThumbnail(message.author.avatarURL)
      .setFooter(`Sargentoo Loja © Todos os direitos reservados.`, message.author.avatarURL)

      message.channel.send(embed);
  }
});

client.on('message', async message => {
  if(message.content.startsWith("!convite")){
    message.reply("**Convite oficial:** ``discord.gg/eKRFgUT``")
}
if (!message.member.hasPermission('ADMINISTRATOR') && (message.content.toLowerCase().includes("discord.gg/") || message.content.toLowerCase().includes("discordapp.com/invite") || message.content.toLowerCase().includes("discord.me/"))) {
  var cargomutado;
  if (!message.guild.roles.find(ch => ch.name === "mutado")) {
      cargomutado = await message.guild.createRole({
          name: "mutado",
          color: "#000000",
          permissions:[]
  })
  message.guild.channels.forEach((canal, id) => {
      canal.overwritePermissions(cargomutado, {
          SEND_MESSAGES: false,
          ADD_REACTIONS: false,
      }); 
  });
  } else {
    cargomutado = message.guild.roles.find(ch => ch.name === "mutado");
  }
  message.member.addRole(cargomutado.id);
  message.delete()
  setTimeout(() => {
      message.member.removeRole(cargomutado.id);
    }, 10 * (60 * (60 * 1000)) );
}
});

client.on('message', async message => {
if(message.channel.id == "562688276306198548" ){
 await message.react("👍")
 await message.react("❤")
 await message.react("😂")
 await message.react("😮")
 await message.react("😢")
 await message.react("😡") 
}  
});

client.login(config.token)


client.on("message", async message => {

    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
    if(!message.content.startsWith(config.prefix)) return;
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const comando = args.shift().toLowerCase();
  
  if (comando === "apng"){
    
  let info = {filename: "emoji.gif"}  
  let [nome, emojilink] = args
  if(!args[0]) return message.reply("Você esqueceu de definir os argumentos\n !apng <nome> <link.gif>");
  if(!args[1]) return message.channel.send("Você esqueceu de definir o link do emoji\n !apng <nome> <link.gif>");
    
    download(emojilink, info, function(err){
      if (!err)  {
      console.log("gif identificado")
      toApng('emoji.gif')
     .then(() => {
       message.guild.createEmoji('emoji.png', nome)
       message.channel.send("O gif-emoji foi convertido para o modo NITRO-Pobre é adicionado!!!")
      })
     .catch(error => console.log('não consegui converter a imagem💀', error))
      }else {
        message.channel.send("Link invalido")
      }
    })
    
  
  }
  
  });
  
  client.login(config.token)
  
