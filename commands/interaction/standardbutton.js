module.exports = {
    name: "standardButton",
    async execute(interactionId, message, client, db, user, match, resBody) {
        console.log(resBody)
        client.replyInteraction(resBody, [], `It Works! ${interactionId}`)
    }
}