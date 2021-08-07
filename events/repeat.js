module.exports = {
    name: "repeat",
    description: "repeating what you said",
    execute(message, args) {
        // inside your message event, etc...
const filter = m => m.author.id === message.author.id;
message.reply("What do you want me to say?\n\n> Expires in 10 Seconds, Type `cancel` to cancel!")
	.then(msg => msg.delete(10000)) // so the message will delete after the time is up (10 seconds)
		.catch(err => {}) // if the bot hasnt got perms to delete the message, it will ignore the error 
message.channel.awaitMessages(filter, {
	max: 1, // do NOT change this 
	time: 10000, // this is the time in MS you want it to last. (There are 1000 MS in 1 second)
	errors: ['time'] // this ensures the only error is "time"
}).then(async(collected) => { // collected is a collection so we use collected.first().content
	if (collected.first().content.toLowerCase() == 'cancel') { // .toLowerCase() converts the user input to lower case, so if they type "CaNcEl" it will still be read as "cancel" and the if statement will run
		message.reply(":sob: The command has been cancelled.") // what to do if the user repleis "cancel"
	} 
	message.channel.send(collected.first().content) // finally send the collected message content to the message channel
}).catch(() => {
	message.reply("You took too long!")
})

// Author: @almostStatic
/* 

	If you have any issues with the above code please feel free to contact me
	PLEASE NOTE THAT THIS CODE MAY NEED TO BE ADAPTED FOR YOUR BOT. And you need to insert this code in a command. 
	You may also contact discord.js offical server for support, https://discordapp.com/invite/bRCvFy9

*/
    }
}