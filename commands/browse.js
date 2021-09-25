// Import Embed(s)
const {browse} = require("./append/embeds") 
module.exports = {
    name: "browse",
    description: "Browse the current Recruit messages.",
   async execute(message, args, client, db) {
        //Getting User data
        var data = db.collection('users').get();
        data = db.collection('users').doc(message.author.id);
        let userdebug = data.get();
        var i = 1
        // get Match data
        const matchdoc = db.collection('match');
        const matchdebug = await matchdoc.get();
        matchdebug.forEach(doc => {
            message.channel.createMessage(browse(doc,user,i));
        })

    }
}