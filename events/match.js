const fs =  require("fs")
module.exports = {

    name: 'match',
    description: 'Start Looking for Matches, or post a LFG.',
    execute(message, args) { 
        var profiles = fs.readFileSync("./events/profiles.json");
                        var user1 = undefined
                        var profiles_json = JSON.parse(profiles);
                        for (var user1name in profiles_json) {
                            if (profiles_json[user1name].name == message.author.id) {
                                user1 = profiles_json[user1name];
                                break

                            }
                            if (user1 === undefined) {
                                console.log("no user1 by that uuid.");
                                return message.channel.send("> Profile not Found, do **`u.profile`** to create your profile.")
                            } else {
                                console.log("Player " + user1.name + " is currently Rank " + user1.rank.rank);
                                message.channel.send("> Looking for a " + user1.rank.rank + " Ranked Match. Click the button below to cancel.");
                            }
    }
} 
}