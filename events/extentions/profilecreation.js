const filter = m => m.author.id === message.author.id;
const fs = require('fs')
const Discord = require('discord.js');
const client = new Discord.Client();
const message = client.on(message)
module.exports = {
    run() {
        console.log(message.channel)
message.channel.send("> Enter your **Pokemon Unite** Username. \n> Warning: This is viewable on your profile, so **set it as your Pokemon Unite** username, and not your personal username.\n> can't do it now? do `cancel` to cancel the Profile Creation Process.").then(msg => msg.delete(10000)) 
		.catch(err => {})
message.channel.awaitMessages(filter, {
	max: 1, // do NOT change this 
	time: 10000, // this is the time in MS you want it to last. (There are 1000 MS in 1 second)
	errors: ['time'] // this ensures the only error is "time"
}).then(async(collected) => { // collected is a collection so we use collected.first().content
	if (collected.first().content.toLowerCase() == 'cancel') { // .toLowerCase() converts the user input to lower case, so if they type "CaNcEl" it will still be read as "cancel" and the if statement will run
		return message.channel.send("Profile Creation has been canceled. Do `u.profile` at any time to start it.") // what to do if the user repleis "cancel"
	} 
    var username = collected.first().content
	message.channel.send("> Enter your Pokemon Unite ID.\n> Need to find the ID? Check your profile card, It should be above your Unite Name.").then(msg => msg.delete(10000)) 
    .catch(err => {})
message.channel.awaitMessages(filter, {
max: 1, // do NOT change this 
time: 10000, // this is the time in MS you want it to last. (There are 1000 MS in 1 second)
errors: ['time'] // this ensures the only error is "time"
}).then(async(collected) => { // collected is a collection so we use collected.first().content
if (collected.first().content.toLowerCase() == 'cancel') { // .toLowerCase() converts the user input to lower case, so if they type "CaNcEl" it will still be read as "cancel" and the if statement will run
    return message.channel.send("Profile Creation has been canceled. Do `u.profile` at any time to start it.") // what to do if the user repleis "cancel"
}
var userid = collected.first().content
message.channel.send("> Enter your Current Rank.\n> Don't have a Rank? type `none` instead. (you will need to do `u.rank beginner` to set your rank to beginner.").then(msg => msg.delete(10000)) 
		.catch(err => {})
message.channel.awaitMessages(filter, {
	max: 1, // do NOT change this 
	time: 10000, // this is the time in MS you want it to last. (There are 1000 MS in 1 second)
	errors: ['time'] // this ensures the only error is "time"
}).then(async(collected) => { // collected is a collection so we use collected.first().content
	if (collected.first().content.toLowerCase() == 'cancel') { // .toLowerCase() converts the user input to lower case, so if they type "CaNcEl" it will still be read as "cancel" and the if statement will run
		return message.channel.send("Profile Creation has been canceled. Do `u.profile` at any time to start it.") // what to do if the user repleis "cancel"
	} 
    if (collected.first().content === "none") {
        var username = collected.first().content
    message.channel.send("> What's your class?\n> Want to find this? look below where it says your rank.")
    } else {
        message.channel.send("> And Finally, what do you use as your main Pokemon?\n Can you use any pokemon? Want to specify 2? Don't Fret! You can put anything here!").then(msg => msg.delete(10000)) 
		.catch(err => {})
message.channel.awaitMessages(filter, {
	max: 1, // do NOT change this 
	time: 10000, // this is the time in MS you want it to last. (There are 1000 MS in 1 second)
	errors: ['time'] // this ensures the only error is "time"
}).then(async(collected) => { // collected is a collection so we use collected.first().content
	if (collected.first().content.toLowerCase() == 'cancel') { // .toLowerCase() converts the user input to lower case, so if they type "CaNcEl" it will still be read as "cancel" and the if statement will run
		return message.channel.send("Profile Creation has been canceled. Do `u.profile` at any time to start it.") // what to do if the user repleis "cancel"
	} 
    message.channel.send("You're all set. Set your class by doing `u.rank class`, then 1 - 5, depending on your rank.")
})
    }
    
}).catch(() => {
    message.channel.send("Time Limit Exceeded, Profile Creation Canceled.")
})
}).catch(() => {
    message.channel.send("Time Limit Exceeded, Profile Creation Canceled.")
})
}).catch(() => {
	message.channel.send("Time Limit Exceeded, Profile Creation Canceled.")
})

    }}