const fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();
// All Secrets held here
const config = JSON.parse(fs.readFileSync("./config.json"));
const prefix = config.prefix;
const commandFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));


client.on('ready', () => {
    console.log(`API Bot active. Currently logged in as ${client.user.tag}.`);
    console.log('The bots current prefix is: ' + prefix);
  });
  
  client.on('message', async message => {

    if (message.author.bot || !message.content.startsWith(prefix)) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    for (const file of commandFiles) {
      const command = require(`./events/${file}`);
      // set a new item in the Collection
      // with the key as the command name and the value as the exported module
      client.commands.set(command.name, command);
    }

    if (!client.commands.has(command)) return;

    try {
      client.commands.get(command).execute(message, args,client,Discord);
    } catch (error) {
      console.error(error); 
      message.reply('there was an error trying to execute that command!');
    }
  });
  
  // Login in bot
  client.login(config.token);