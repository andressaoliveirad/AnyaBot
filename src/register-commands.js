require('dotenv').config();
const { REST, Routes, ApplicationCommandOptionType } = require('discord.js');

const commands = [
    {
        name: 'hola',
        description: 'replies with Hola!',
    },
    {
        name: 'ping',
        description: 'Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(process.env.TOKEN);

(async () => {
    try {
        console.log('Registrando barras de comando...')

        await rest.put(
            Routes.applicationGuildCommands(process.env.CLIENT_ID, process.env.GUILD_ID),
            { body: commands }
        )

        console.log('Barras de comando registradas com sucesso!')
    } catch (error) {
        console.log(`Houve um erro: ${error}`)
    }
})();