
var timeout = "You have Exceeded the Time limit. Profile Creation has been canceled.";

async function setup(message, db) {
    const filter = m => m.author.id === message.author.id;
    let usercancel = "Profile Creation has been canceled. do `u.profile to start it again.";

    let messagesFilter = {
      max: 1, // leave this the same
      time: 20000, // time in MS. there are 1000 MS in a second 
      filter
    }; // Seems repetitive, I'll put this here anyway.

    /* First Section */
    await message.channel.createMessage("Attention: Your setup may be interupted because of a restart." + "\n\n> Enter your **Pokémon Unite** username.\n> Warning: Use your **Pokémon Unite** username. This is so people can find you when needed.\n> (oh, and BTW, if your in game name IS cancel, I am so sorry. contact @Galexion#0612 for you to set it up.)")
    let username = await message.channel.awaitMessages(messagesFilter);
    if (!username.collected.size) return message.channel.createMessage(timeout);

    let usernameContent = username.collected.entries().next().value.pop().content; // collected.first().content;

    // This area is if the user did not reply "cancel".
    if (usernameContent === 'cancel') {
      return message.channel.createMessage(usercancel);
      // Use return, to break the whole thing, cuz its cancelled btw.
    };

    console.log(message.author.id + '\'s Username : ' + usernameContent);

    /* Second Section */
    await message.channel.createMessage("> What is your Trainer ID?\n> This can be found under the username")
    let trainer = await message.channel.awaitMessages(messagesFilter);
    if (!trainer.collected.size) return message.channel.createMessage(timeout);

    let trainerContent = trainer.collected.entries().next().value.pop().content;
    if (trainerContent === 'cancel') {
      return message.channel.createMessage(usercancel);
    };

    console.log(message.author.id + '\'s Unite ID : ' + trainerContent);

    /* Third Section */
    await message.channel.createMessage("> If you use any Pokemon as your current main, put it here. (This is a string).\n> Misuse of this line will get your account terminated. Do not use it for anything else but Pokemon.")
    let pokemon = await message.channel.awaitMessages(messagesFilter);
    if (!pokemon.collected.size) return message.channel.createMessage(timeout);

    let pokemonContent = pokemon.collected.entries().next().value.pop().content;
    if (pokemonContent === 'cancel') {
      return message.channel.createMessage(usercancel);
    };

    console.log(message.author.id + '\'s Pokemon Mains : ' + pokemonContent);

    /* Fourth Section */
    await message.channel.createMessage("> Confirm that all is correct.\n> Username: " + username + "\n> User ID: " + userid + "\n> Your Mains: " + userpokemains + "\n > Confirm with `yes` or cancel with `cancel` and restart with `u.profile`.\n> ATTN: **After this, head to `u.rank` to change your rank.**\n>You Can't change this afterwards unless you contact Galexion#0612.");
    let prompt = await message.channel.awaitMessages(messagesFilter);
    if (!prompt.collected.size) return message.channel.createMessage(timeout);

    let promptContent = prompt.collected.entries().next().value.pop().content;
    if (promptContent === 'cancel') {
      return message.channel.createMessage(usercancel);
    };

    // You want to add promptContent === "no" or sorta next time, something that suits to you :)
    const doc = db.collection('users').doc(message.author.id);
    await doc.set({ id: message.author.id, name: username, TrainerID: userid, mains: { one: userpokemains }, rank: { rank: 'Beginner', class: '1' } })
};

module.exports = {
    name: 'profile',
    description: 'Set up your Profile, see it, and view others.',

    async execute(message, args, client, db) {
        var user = undefined;
        console.log("Command Received");
        switch (args[0]) {
            case "view":
                console.log(args[1])
                if (args[1] === undefined) {
                    return message.channel.createMessage("> Please make sure you say a player's **Pokémon Unite** username.")
                } else {
                    await console.log(message.author.id);

                    var data = db.collection('users').get();
                    let user = data.data();
                    
                    if (user === undefined) {
                        console.log("no user by that uuid.");
                        return message.channel.createMessage("> No User found. Did you type in the person's **Pokémon Unite** Username?")
                    } else {
                        if (user.mains.two === null) {
                            message.channel.createMessage({ embed: userLookup2 })
                        } else {
                            const userlookup = {
                                "title": `Profile Info: ${user.name}`,
                                "color": 2884926,
                                "footer": {
                                  "text": `Pokémon Unite User Lookup / Trainer ID: ${user.TrainerID}`
                                },
                                "author": {
                                  "name": "Pokémon Unite Ranked Bot: Search Mode"
                                },
                                "fields": [{
                                  "name": "Current MAIN pokémon:",
                                  "value": `${user.mains.one}`
                                },
                                {
                                  "name": "Current Rank:",
                                  "value": `${user.rank.rank} class ${user.rank.class}`
                                }]
                            };

                            const userlookup2 = {
                                "title": `Profile Info: ${user.name}`,
                                "color": 2884926,
                                "footer": {
                                  "text": `Pokémon Unite User Lookup / Trainer ID: ${user.TrainerID}`
                                },
                                "author": {
                                  "name": "Pokémon Unite Ranked Bot: Search Mode"
                                },
                                "fields": [{
                                  "name": "Current MAIN pokémon:",
                                  "value": `${user.mains.one}, ${user.mains.two}`
                                },
                                {
                                  "name": "Current Rank:",
                                  "value": `${user.rank.rank} class ${user.rank.class}`
                                }]
                            };
                            
                            if (user.mains.two === null) {
                                message.channel.createMessage({ embed: userLookup2 })
                            } else {
                                message.channel.createMessage({ embed: userlookup });
                            }
                        }
                    }
                }

                break
            default:
                if (args[1] !== undefined) return message.channel.createMessage("> Please check u.help profile.")
                var data = db.collection('users').doc(message.author.id);
                var profiles = await data.get();
                var user = profiles.data();
        }

        if (profiles === undefined || user === undefined) {
            console.log("> No Profile associated with your account, Starting the Profile Creation Process.");
            setup(message, db);
            return;
        } else {
            const userlookup = {
                "title": `Profile Info: ${user.name}`,
                "color": 2884926,
                "footer": {
                    "text": `Pokémon Unite User Lookup / Trainer ID: ${user.TrainerID}`
                },
                "author": {
                    "name": "Pokémon Unite Ranked Bot: Search Mode"
                },
                "fields": [{
                    "name": "Current MAIN pokémon:",
                    "value": `${user.mains.one}`
                },
                {
                    "name": "Current Rank:",
                    "value": `${user.rank.rank} class ${user.rank.class}`
                }
                ]
            };
            const userlookup2 = {
                "title": `Profile Info: ${user.name}`,
                "color": 2884926,
                "footer": {
                    "text": `Pokémon Unite User Lookup / Trainer ID: ${user.TrainerID}`
                },
                "author": {
                    "name": "Pokémon Unite Ranked Bot: Search Mode"
                },
                "fields": [{
                    "name": "Current MAIN pokémon:",
                    "value": `${user.mains.one}, ${user.mains.two}`
                },
                {
                    "name": "Current Rank:",
                    "value": `${user.rank.rank} class ${user.rank.class}`
                }
                ]
            };
            if (user.mains.two === null) {
                message.channel.createMessage({ embed: userLookup2 })
            } else {
                message.channel.createMessage({ embed: userlookup });
            }
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
