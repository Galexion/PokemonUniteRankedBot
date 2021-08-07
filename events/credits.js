const embed = {
    "title": "Credits",
    "description": "The Credits for who made this useful tool.",
    "color": 10472460,
    "timestamp": "2021-08-05T15:12:13.655Z",
    "footer": {
      "icon_url": "https://cdn2.bulbagarden.net/upload/thumb/0/0d/Pok%C3%A9mon_UNITE_logo.png/1200px-Pok%C3%A9mon_UNITE_logo.png",
      "text": "Made with Love & Poképuffs"
    },
    "thumbnail": {
      "url": "https://cdn2.bulbagarden.net/upload/thumb/0/0d/Pok%C3%A9mon_UNITE_logo.png/1200px-Pok%C3%A9mon_UNITE_logo.png"
    },
    "author": {
      "name": "Pokémon Unite Rank Finder",
      "icon_url": "https://cdn2.bulbagarden.net/upload/thumb/0/0d/Pok%C3%A9mon_UNITE_logo.png/1200px-Pok%C3%A9mon_UNITE_logo.png"
    },
    "fields": [
      {
        "name": "Created by:",
        "value": "Professor Galexion (**Galexion**#0612)"
      },
      {
        "name": "Encountered a Error?",
        "value": "All Errors are sent to the professor when encountered."
      },
      {
        "name": "Need to make a profile?",
        "value": "Do **`PU!profile`**!",
        "inline": true
      },
      {
        "name": "This is Open-Source!",
        "value": "Check this out on github!\nGalexion/PokemonUniterankedbot",
        "inline": true
      }
    ]
  };

module.exports = {
    name: 'Credits',
    description: 'Gives Credits to the creator.',
    execute(message) {
        message.channel.send({ embed })
    }
};