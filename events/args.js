module.exports = {
    name: 'args',
    description: 'lists your arguments',
    execute(message, args) {
        message.channel.send('> here are your arguments.\n' + args);
    },
};