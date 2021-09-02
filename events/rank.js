//Required for buttons to work on this section
const { MessageActionRow, MessageButton } = require('discord.js');

//YES I know I am using a discontinued extention to Discord.js.
// do not fucking @ me.
module.exports = {
    name: 'rank',
    description: '> Change your rank here.',
   async execute(message, args, client, db) {
        var data = db.collection('users').doc(message.author.id);
        if(!data.exist) return message.channel.send("> Please use `u.profile` first, then come back here.")
        var profiles = await data.get();
        var user = profiles.data();
        
        message.channel.send(`> Welcome to the rank Centre.\n> Current status: ${user.rank.rank} Class ${user.rank.class}`)
    },
};