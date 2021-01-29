const Discord = require('discord.js');
const fs = require('fs')
require('dotenv').config();

const token = process.env.TOKEN
const prefix = process.env.PREFIX

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandsFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for(const file of commandsFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};
//Start

client.once('ready', () => {
    console.log(`Estou online como ${client.user.username}`)
});

//Greetings
client.on('guildMemberAdd', member => {
    const channel = member.guild.channels.cache.find(ch => ch.name === 'member-log');
    if(!channel) return;
    channel.send(`Seja bem-vindo ao server da DM ${member}!`);
});

// Commands
    client.on('message', (msg) => {
        if(!msg.content.startsWith(prefix) || msg.author.bot) return;
            const args = msg.content.slice(prefix.length).trim().split(/ +/);
            const command = args.shift().toLowerCase();

            if(command === 'ping'){
                client.commands.get('ping').execute(msg,args);
            }else if(command === 'clear'){
                client.commands.get('clear').execute(msg,args);
            }else if(command === ''){

            }
    });

client.login(token);