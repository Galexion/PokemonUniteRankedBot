// this is an append file for Profile.js (u.profile)

// Quickly loading from the embeds.js append file.
let { sfs, sss, sts, sfhs } = require("./embeds")
//Code
module.exports = {

    async (message, db) {
        const filter = m => m.author.id === message.author.id;
        let usercancel = "Profile Creation has been canceled. do ``u.profile to start it again.``";
        let timeout = "> Connection Lost. Please try again."
        let messagesFilter = {
            max: 1, // leave this the same
            time: 30000, // time in MS. there are 1000 MS in a second 
            filter
        }; // Seems repetitive, I'll put this here anyway.
    
        /* First Section */
        await message.channel.createMessage(sfs)
        let username = await message.channel.awaitMessages(messagesFilter);
        if (!username.collected.size) return message.channel.createMessage(timeout);
    
        let usernameContent = username.collected.entries().next().value.pop().content; // collected.first().content;
    
        // This area is if the user did not reply "cancel".
        if (usernameContent === 'cancel') {
            return message.channel.createMessage(usercancel);
            // Use return, to break the whole thing, cuz its cancelled btw.
        };
    
        console.log(message.author.id + '\'s Username : ' + usernameContent);
        let name = usernameContent
    
        /* Second Section */
        await message.channel.createMessage(sss)
        let trainer = await message.channel.awaitMessages(messagesFilter);
        if (!trainer.collected.size) return message.channel.createMessage(timeout);
    
        let trainerContent = trainer.collected.entries().next().value.pop().content;
        if (trainerContent === 'cancel') {
            return message.channel.createMessage(usercancel);
        };
    
        console.log(`${message.author.id}'s Unite ID : ${trainerContent}`);
        let userid = trainerContent
    
        /* Third Section */
        await message.channel.createMessage(sts)
        let pokemon = await message.channel.awaitMessages(messagesFilter);
        if (!pokemon.collected.size) return message.channel.createMessage(timeout);
    
        let pokemonContent = pokemon.collected.entries().next().value.pop().content;
        if (pokemonContent === 'cancel') {
            return message.channel.createMessage(usercancel);
        };
    
        console.log(`${message.author.id}'s Pokemon Mains : ${pokemonContent}`);
        let userpokemains = pokemonContent
    
        /* Fourth Section */
        await message.channel.createMessage(sfhs(name,userid,userpokemains));
        let prompt = await message.channel.awaitMessages(messagesFilter);
        if (!prompt.collected.size) return message.channel.createMessage(timeout);
    
        let promptContent = prompt.collected.entries().next().value.pop().content;
        if (promptContent === 'cancel') {
            return message.channel.createMessage(usercancel);
        };
    
        // You want to add promptContent === "no" or sorta next time, something that suits to you :)
        const doc = db.collection('users').doc(message.author.id);
        await doc.set({ id: message.author.id, name: name, TrainerID: userid, mains: { one: userpokemains }, rank: { rank: 'Beginner', class: '1' } })
    }
}