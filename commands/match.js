
let { match,notFound } = require("./append/embeds")
module.exports = {
    name: 'match',
    description: 'Change & view your rank.',
    async execute(message, args, client, db) {
        let user = db.collection('users').doc(message.author.id);
        if (user.exist) { return message.channel.createMessage(notFound) }
        let userdebug = await user.get()
        user = userdebug.data()
        message.channel.createMessage(match(user))
    }
}