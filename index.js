const Discord = require('discord.js');

const client = new Discord.Client();

const token = 'Nzk5NzA1NjkxNzQwMDQ1MzM0.YAHd9g.kIIcoq2nneGX_HqOm0JJmtRkxOU'

client.on('ready', () =>{
    console.log('logged')
});
client.on('message', msg =>{
    if(msg.content === 'teste'){
        msg.reply('Eu estou aqui!')
    }
});
client.on('guildMemberAdd',member =>{
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log')
    if (!channel) return;
    channel.send ('Seja Bem vindo ao Servidor, ${member}');
});
client.on('message', msg =>{
    if(msg.content === '!zorkador'){
        msg.reply('Zorkador vulgo  menino beico')
    }
});
client.on('message', msg =>{
    if(msg.content === '!dreamy'){
        msg.reply('undefined')
    }
})
client.on('message', msg => {
    if(msg.content === '!snz'){
        msg.reply('O cara do coding!')
    }
})
client.login(token);