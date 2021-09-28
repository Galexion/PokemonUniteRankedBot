const { userlookup } = require("./append/embeds");
const { setup } = require("./append/createProfile");
module.exports = {
    name: 'profile',
    description: 'Set up your Profile, see it, and view others.',

    async execute(message, args, client, db) {
        var user = undefined;
        switch (args[0]) {
            case "view":
                console.log(args[1])
                if (args[1] === undefined) {
                    return message.channel.createMessage("> Please make sure you say a player's **Pokémon Unite** username.")
                } else {
                    await console.log(message.author.id);

                    var data = db.collection('users').doc(args[1].slice(2,20));
                    let userdebug = await data.get();
                    let user = userdebug.data()
                    if (user === undefined) {
                        console.log("no user by that uuid.");
                        return message.channel.createMessage("> No User found. Did you type in the person's **Pokémon Unite** Username?");
                        break;
                    } else {
                        return message.channel.createMessage(userlookup(user));
                        
                    }
                }
            default:
                if (args[1] !== undefined) return message.channel.createMessage("> Please check u.help profile.")
                var data = db.collection('users').doc(message.author.id);
                var profiles = await data.get();
                var user = profiles.data();
                break;
        }

        if (profiles === undefined || user === undefined) {
            console.log("> No Profile associated with your account, Starting the Profile Creation Process.");
            setup(message, db);
            return;
        } else {
            message.channel.createMessage(userlookup(user)).catch(err => {
                console.log(err)
            })
        }
    }
};
/*

    /*
    let userid = message.author.id
    const findprofile = profiles.data;
    console.log("looking for " + userid + "'s profile.");
    var found = findid(userid)
    console.log(found[0].pokemonunitename)
    */
//break;
