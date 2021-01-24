const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const fs = require('fs');
const path = require('path');

const token = process.env.DISCORD_TOKEN

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync(path.join(__dirname, './commands'))
.filter((filename) => filename.endsWith('.js'))

for(var filename of commandFiles) {
    const command = require(`./commands/${filename}`);

    client.commands.set(command.name, command);
}

client.on('ready', () =>{
    console.log(`Estou online como ${client.user.username}`)
});

client.login(token);