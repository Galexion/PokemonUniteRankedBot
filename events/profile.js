const profiles = require("./profiles.json");
const { mains } = JSON.stringify(profiles[0].mains);
const { rank } = JSON.stringify(profiles[0].rank);

function findid(userid) {
  return profiles.filter(
    function(profiles) {
      return profiles.code == userid
    }
  );
}

module.exports = {
    name: 'profile',
    description: 'Set up your Profile, see it, and view others.',
    execute(message, args, Discord) {
        console.log("Command Recieved");

        switch (args[0]) {
            case "view":
                if (args[0] === "view") {
                    if (args[0].length >= 1) {
                        console.log(args[1])
                        if (args[1] === undefined) { return message.channel.send("> Please make sure you say a player's **Pokémon Unite** username.") };
                    } 
                }
                break;
            default:
                let userid = message.author.id
                const findprofile = profiles.data;
                console.log(profiles)
                console.log("looking for " + userid + "'s profile.");
                var found = findid(userid)
                console.log(found[0].pokemonunitename)
                
                break;
        }
    }
};