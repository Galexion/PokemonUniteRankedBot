//This file contains all the embeds needed for commands.


// fallback user info
let user1 = {
  name: "default",
  ID: "ID"
}
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
      "fields": [
        {
          "name": "Preform u.profile to create a profile.",
          "value": "**This will start a profile creation screen.**\n**You can also click the button below to start the creation process.**"
        }
      ]
    }
  },
  // browse command
  browse(match, user, i) {
    return {
      "embed": {
        "title": `Found A Match! (Index ${i})`,
        "color": 2884926,
        "footer": {
          "text": `Pokémon Unite Match Found || Sent at ${match.timestamp} || Username: ${user.name} / Trainer ID: ${user.TrainerID}`
        },
        "author": {
          "name": `> Found Match, Sent by ${match.creator}`
        },
        "fields": [
          {
            "name": ">> Message:",
            "value": `${match.message}`
          },
          {
            "name": ">> Looking for Rank(s)",
            "value": `${match.rank}`
          },
          {
            "name": ">> People already In",
            "value": `${match.people} \`This is not real time.\``
          }
        ]
      }
    }
  },
  //profile command
  userlookup(user) {
    return {
      "embed": {
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
      }
    }
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
  },
  // Append files embeds.
  //createProfile append
  sfs: {
    "title": "What is your Pokemon Unite Username?",
    "description": "Send your Pokemon Unite Username in here.\n**Max Time: 20 Seconds**",
    "color": 4361662,
    "footer": {
      "text": "Profile is being created | ${time}"
    },
    "author": {
      "name": "PokeRanked"
    }
  },
  sss: {
    "title": "What is your Trainer ID?",
    "description": "Send your Pokemon Unite Username in here.\n**Max Time: 20 Seconds**",
    "color": 4361662,
    "footer": {
      "text": "Profile is being created | ${time}"
    },
    "image": {
      "url": "https://firebasestorage.googleapis.com/v0/b/pokemonu-unite-ranked-backend.appspot.com/o/TrainerID.png?alt=media&token=086d695a-77b2-45d9-a19e-ee8acecb9ec7"
    },
    "author": {
      "name": "PokeRanked"
    }
  },
  sts: {
    "title": "Which Pokemon do you Main?",
    "description": "(FYI, \"Mains\" are the pokemon you choose to play as the most, and feel like you do the best with.)\nHave more then one? Just type that one!\n(**Misuse of this may cause your`- ;/ profile to get wiped from PokeRanked Server.)\n**Max Time: 20 Seconds**",
    "color": 4361662,
    "footer": {
      "text": "Profile is being created | ${time}"
    },
    "author": {
      "name": "PokeRanked"
    }
  },
  sfhs(name, userid, userpokemains) {
    return {
      "title": "Verify that everything is correct.",
      "description": `> Confirm that all is correct.\n> Username: ${name}\n> User ID: ${userid}\n> Your Mains: ${userpokemains}\n > Confirm with \`yes\` or cancel with \`cancel\` and restart with \`u.profile\`.\n> ATTN: **After this, head to \`u.rank\` to change your rank.**\n>You Can't change this afterwards unless you contact Galexion#0612.`,
      "color": 4361662,
      "footer": {
        "text": "Profile is being created | ${time}"
      },
      "author": {
        "name": "PokeRanked"
      }
    }
  }
}
