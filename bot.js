let { token, prefix } = require("./config.json")
//Config Eris
const eris = require("eris");
require('pluris')(eris);
let client = new eris(token);
//config commandsFiles
const fs = require("fs")
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
//Firestore Initialize
const admin = require("firebase-admin");

const serviceAccount = require("./firebase.json");

admin.initializeApp({
	credential: admin.credential.cert(serviceAccount)
});
const db = admin.firestore();

client.on("ready", () => {
    client.editStatus("idle", {name:"Pokemon Unite", type: 5})
    console.log("PokeRanked ERIS version online.\nNote this version is a rewrite, and won't have all of the features of the current version, yet.");
});

client.on("messageCreate", async message => {
    if (message.author.bot || !message.channel.guild) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();
    client.commands = new Map();
    for (const file of commandFiles) {
		const command = require(`./commands/${file}`);
		// set a new item in the Collection
		// with the key as the command name and the value as the exported module
		client.commands.set(command.name, command);
	}

	if (!client.commands.has(command)) return;

	try {
		client.commands.get(command).execute(message, args, client, db);
	} catch (error) {
		console.error(error);
		message.channel.createMessage('there was an error trying to execute that command!');
	}
});

client.connect();