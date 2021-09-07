module.exports = {
    name: 'rank',
    description: 'Change & view your rank.',
    async execute(message, args, client, db) {
        let user = db.collection('users').doc(message.author.id);
        if (user.exist) { return message.channel.createMessage("> User Profile not found. Go to `u.profile` or click the button below to start profile creation.") }
        let userdebug = await user.get()
        let userinfo = userdebug.data()
    }
}