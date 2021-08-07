const fs = require("fs");
const embeds = require("./embeds/embeds");
module.exports = {
    name: 'profile',
    description: 'Set up your Profile, see it, and view others.',
    execute(message, args) {
        var user1 = undefined;
        console.log("Command Recieved");
        switch (args[0]) {
            case "view":
                if (args[0].length >= 1) {
                    console.log(args[1])
                    if (args[1] === undefined) {
                        return message.channel.send("> Please make sure you say a player's **Pokémon Unite** user1name.")
                    } else {
                        var profiles = fs.readFileSync("./events/profiles.json");
                        var profiles_json = JSON.parse(profiles);
                        for (var user1name in profiles_json) {
                            if (profiles_json[user1name].name == args[1]) {
                                user1 = profiles_json[user1name];
                                break

                            }
                            if (user1 === undefined) {
                                console.log("no user1 by that uuid.");
                                message.channel.send("> No User found. Did you type in the person's **Pokémon Unite** Username?")
                            } else {
                                console.log("Player " + user1.name + " is currently Rank " + user1.rank.rank);
                                
                            }
                        }
                    }
                }
                break
            default:
                var profiles = fs.readFileSync("./events/profiles.json");
                var profiles_json = JSON.parse(profiles);
                for (var user1_num in profiles_json) {
                    if (profiles_json[user1_num].id == message.author.id) {
                        user1 = profiles_json[user1_num];
                        break
                    }
                }
                if (user1 === undefined) {
                    console.log("no user1 by that uuid.");
                    message.channel.send("> No Profile associated with your account, Starting the Profile Creation Process.");
                    
                } else {
                    console.log("Player " + user1.name + " is currently Rank " + user1.rank.rank)
                    
                }
                break;
        }
    }
};
/*
  
  /*
    let user1id = message.author.id
    const findprofile = profiles.data;
    console.log("looking for " + user1id + "'s profile.");
    var found = findid(user1id)
    console.log(found[0].pokemonunitename)
    */
//break;