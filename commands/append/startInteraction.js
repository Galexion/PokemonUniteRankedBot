// used to start interactions from buttons
const fs = require("fs");
module.exports = {
    async interaction(interactionId, message, client, db, user, match, resBody) {
        const interactionFiles = fs.readdirSync('./commands/interaction').filter(file => file.endsWith('.js'));
        client.interaction = new Map();
    for (const file of interactionFiles) {
		const interaction = require(`../interaction/${file}`);
		// set a new item in the Collection
		// with the key as the command name and the value as the exported module
		client.interaction.set(interaction.name, interaction);
	}
	if (!client.interaction.has(interactionId)) return console.log("no interaction Found. try again.");

	try {
		client.interaction.get(interactionId).execute(interactionId, message, client, db, user, match, resBody);
	} catch (error) {
		console.error(error);
		message.channel.createMessage('> Error detected. Please try pressing the button again.');
	}
    }
}