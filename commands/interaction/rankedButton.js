module.exports = {
    name: "rankedButton",
    async execute(interactionId, message, client, db, user, match, resBody) {
        message.channel.createMessage(`It Works! Yata! ${interactionId}`)
    }
}