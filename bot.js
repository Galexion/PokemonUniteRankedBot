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

    if(command ==="update"){
      console.log(message.author.id)
      let filter = m => m.author.id === message.author.id
      if(message.author.id !== "191375607731453952"){
        message.channel.send("This command is for Proffesor Galexion ONLY, and can take down the bot for a update. Your not Galexion.")
      } else {
        message.channel.send("> Warning: this halts all match making processes, and wipes the LFG JSON File. Are you sure you want to do this?").then(
          message.channel.awaitMessages(filter, {
          max: 1, // leave this the same
          time: 20000, // time in MS. there are 1000 MS in a second
             }).then(async(collected) => {
              
              if(collected.first().content == 'no'){
              return message.reply("Restart ABORTED.")
          } 
          if(collected.first().content !== 'yes') {
            return message.channel.send(collected.first().content + " is not a awnser. Aborting.")
           }
          // This area is if the user did not reply "cancel".
          console.log("preforming restart.")
          .then(msg => client.destroy())
          .then(() => client.login(config.token));
             }))
      }
    }

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