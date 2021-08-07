const fs = require("fs")
module.exports = {
    name: "match",
    description: "Start Looking for a open Lobby.",
    extdesc: "Look for a Open Lobby that matches your rank and prefences.",
    execute(message,args) {
        var user = undefined
        var profiles = fs.readFileSync("./events/profiles.json");
        var profiles_json = JSON.parse(profiles);
        for (var user_num in profiles_json) {
         if (profiles_json[user_num].id == message.author.id) {
         user = profiles_json[user_num];
         break
         }
      }
      console.log(user.name)
      if (user === undefined) {
        console.log("User " + message.author.id + " Cannot use Matchmaking, as no profile has been found.");
        message.channel.send("> **ERROR**: You can't start Matchmaking without a profile, do **`u.profile`** to get started.")
      } else {
        console.log("Found " + message.author.id + "'s profile, " + user.name + " is currently Rank " + user.rank.rank + " Class " + user.rank.class );
        message.channel.send("> Please Wait, finding you a match...\n> **Details**: Rank " + user.rank.rank + " Class " + user.rank.class + "\n> **ATTENTION**: This is just a placeholder for a embed.")
      }
    }
}