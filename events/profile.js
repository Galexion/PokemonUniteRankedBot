const fs = require("fs");
const { messageAttachment } = require("discord.js")
const embeds = require("./embeds/embeds");
var timeout = "You have Exceeded the Time limit. Profile Creation has been canceled."
function setup(message) {
    const filter = m => m.author.id ===  message.author.id;
    var usercancel = "Profile Creation has been canceled. do `u.profile to start it again.";
    message.channel.send("Attention: Your setup may be interupted because of a restart." + "\n\n> Enter your **Pokémon Unite** username.\n> Warning: Use your **Pokémon Unite** username. This is so people can find you when needed.\n> (oh, and BTW, if your in game name IS cancel, I am so sorry. contact @Galexion#0612 for you to set it up.)").then(
message.channel.awaitMessages(filter, {
max: 1, // leave this the same
time: 20000, // time in MS. there are 1000 MS in a second
   }).then(async(collected) => {
    if(collected.first().content == 'cancel'){
    message.reply(usercancel)
} // This area is if the user did not reply "cancel".
var username = collected.first().content;
console.log(message.author.id + '\'s Username : ' + username)
                                                                    //Question 2
message.channel.send("> What is your Trainer ID?\n> This can be found under the username").then(
    message.channel.awaitMessages(filter, {
    max: 1, // leave this the same
    time: 20000, // time in MS. there are 1000 MS in a second
       }).then(async(collected) => {
        if(collected.first().content == 'cancel'){
        message.reply(usercancel)
    } // This area is if the user did not reply "cancel".
    var username = collected.first().content;
    console.log(message.author.id + '\'s Username : ' + username)
                                                                    //Question 3
    message.channel.send("If your Reading this, it whent right.")
    }).catch(() => {
        // what to do if a user takes too long goes here 
    message.reply(timeout); 
    }))
}).catch(() => {
    // what to do if a user takes too long goes here 
message.reply(timeout); 
}));

}

module.exports = {
    name: 'profile',
    description: 'Set up your Profile, see it, and view others.',
    execute(message, args) {
        var user = undefined;
        console.log("Command Recieved");
        switch (args[0]) {
            case "view":
                    console.log(args[1])
                    if (args[1] === undefined) {
                        return message.channel.send("> Please make sure you say a player's **Pokémon Unite** username.")
                    } else {
                        var profiles = fs.readFileSync("./events/profiles.json");
                        var profiles_json = JSON.parse(profiles);
                        for (var username in profiles_json) {
                            if (profiles_json[username].nameid == args[1]) {
                                user = profiles_json[username];
                                break

                            }
                            if (user === undefined) {
                                console.log("no user by that uuid.");
                                 return message.channel.send("> No User found. Did you type in the person's **Pokémon Unite** Username?")
                            } else {
                                console.log("Player " + user.name + " is currently Rank " + user.rank.rank);
                                if(user.mains.two === null) {
                                    message.channel.send({embed: userLookup2})
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
                                    if(user.mains.two === null) {
                                        message.channel.send({embed: userLookup2})
                                    } else {
                                        message.channel.send({embed: userlookup});
                                    }
                                }
                            }
                            }
                        }
                    
                break
            default:
                if (args[1] !== undefined) { return message.channel.send("> Please check u.help profile.")}
                var profiles = fs.readFileSync("./events/profiles.json");
                var profiles_json = JSON.parse(profiles);
                for (var user_num in profiles_json) {
                    if (profiles_json[user_num].id == message.author.id) {
                        user = profiles_json[user_num];
                        break
                    }
                }
                if (user === undefined) {
                    
                    console.log("> No Profile associated with your account, Starting the Profile Creation Process.");
                    setup(message)
                         } else {
                    console.log("Player " + user.name + " is currently Rank " + user.rank.rank);
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
                    if(user.mains.two === null) {
                        message.channel.send({embed: userLookup2})
                    } else {
                        message.channel.send({embed: userlookup});
                    }
                }
                break;
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