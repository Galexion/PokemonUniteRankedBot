//This file contains all the embeds needed for commands.


// fallback user info
let user1 = {
  name: "default",
  ID: "ID"
}
console.log(user1)
// funtion to redefine user

// Get current Date
let date_ob = new Date();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let time = hours + ":" + minutes + " UTC"
module.exports = {
  // Profile Not Found
  notFound: {
    "embed": {
      "title": "> Error: Profile Not found",
      "color": 15447290,
      "footer": {
        "text": `No Username | No Trainer ID | ${time}`
      },
      "fields":[
        {
          "name": "Preform u.profile to create a profile.",
          "value": "**This will start a profile creation screen.**\n**You can also click the button below to start the creation process.**"
        }
      ]
    }
  },
  //profile command
  userlookup(user){
    return {
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
    }]}
},

  // match command
  match(user) {
    return {
      "embed": {
        "title": "Matchmaking Centre: Front Desk",
        "color": 15447290,
        "footer": {
          "text": `Username: ${user.name} | Trainer ID: ${user.TrainerID} | ${time}`
        },
        "author": {
          "name": "PokeRanked"
        },
        "fields": [
          {
            "name": `*Welcome to the matchmaking Centre ${user.name}, how may we help you today?*`,
            "value": "**select from the buttons below to make a selection.**"
          }
        ]
      }
    }
  }
}