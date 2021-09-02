const fs = require('fs')
const {Client, Intents} = require('discord.js');
const Discord = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
client.commands = new Discord.Collection();
// All Secrets held here
const config = JSON.parse(fs.readFileSync("./config.json"));
const prefix = config.prefix;
const commandFiles = fs.readdirSync('./events/').filter(file => file.endsWith('.js'));
//Firestore Initialize
const admin = require("firebase-admin");

const serviceAccount = require("./firebase.json");
const { exit } = require('process');

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();
// Discord.JS
client.on('ready', async () => {
	console.log(`Pokémon Unite Ranked Bot is now online. Currently logged in as ${client.user.tag}.`);
	console.log('The bots current prefix is: ' + prefix);
	let check = db.collection('startup').doc('check');
	let doc = await check.get();
	let data = doc.data()
	if (!doc.exists) {
		console.log("please check the github repository for setup.");
	} else if (data.EULA === "1") {
		console.log("Check Complete.");
	} else {
		console.log("Please read the EULA to learn the allowed uses.");
		exit(1)
	};

});

client.on('message', async message => {

	if (message.author.bot || !message.content.startsWith(prefix)) return;

	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLowerCase();

	if (command === "update") {
		console.log(message.author.id)
		let filter = m => m.author.id === message.author.id
		if (message.author.id !== "191375607731453952") {
			message.channel.send("This command is for Proffesor Galexion ONLY, and can take down the bot for a update. Your not Galexion.")
		} else {
			message.channel.send("> Warning: this halts all match making processes, and wipes the LFG JSON File. Are you sure you want to do this?").then(
				message.channel.awaitMessages(filter, {
					max: 1, // leave this the same
					time: 20000, // time in MS. there are 1000 MS in a second
				}).then(async (collected) => {

					if (collected.first().content == 'no') {
						return message.reply("Restart ABORTED.")
					}
					if (collected.first().content !== 'yes') {
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
		client.commands.get(command).execute(message, args, client, db);
	} catch (error) {
		console.error(error);
		message.reply('there was an error trying to execute that command!');
	}
});

// Login in bot
client.login(config.token);