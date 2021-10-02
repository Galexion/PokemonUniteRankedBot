let { match,notFound } = require("./append/embeds");
let { matchbuttons } = require("./append/components");
let { interaction } = require("./append/startInteraction");
module.exports = {
    name: 'match',
    description: 'Change & view your rank.',
    async execute(message, args, client, db, ErisComponents) {
        let user = db.collection('users').doc(message.author.id);
        if (user.exist) { return message.channel.createMessage(notFound) }
        let userdebug = await user.get()
        user = userdebug.data()
        client.sendComponents(message.channel.id, matchbuttons(user), match(user));
        client.on('interactionCreate', (resBody) => {
            let interactionId = resBody.data.custom_id
            let resbody = resBody
            console.log(interactionId)
            interaction(interactionId, message, client, db, user)
        });
    }
}