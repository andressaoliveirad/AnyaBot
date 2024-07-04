require('dotenv').config();
const { Client, IntentsBitField } = require('discord.js');

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.username} está online.`);
});

client.on('messageCreate', (message) => {
    if (message.content === 'Hola') {
        message.reply('Hola!');
    }

    if (message.content === 'Ping') {
        message.reply('Pong!');
    }
});

client.on('interactionCreate', (interaction) => {
    if (!interaction.isChatInputCommand()) return;

    if (interaction.commandName === 'Hola') {
        interaction.reply('Hola!')
    }

    if (interaction.commandName === 'Ping') {
        interaction.reply('Pong!')
    }

    console.log(interaction.commandName);
});

client.login(process.env.TOKEN);