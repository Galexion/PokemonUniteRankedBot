const data = {
    "embed": {
      "title": "It seems cinderace finds the current situation cursed.",
      "color": 6313657,
      "timestamp": "2021-09-05T03:44:01.181Z",
      "footer": {
        "text": "footer text"
      },
      "image": {
        "url": "https://firebasestorage.googleapis.com/v0/b/pokemonu-unite-ranked-backend.appspot.com/o/cinderaceCross2x.png?alt=media&token=3acf8bd6-22fc-413a-8254-89a81d239962"
      },
      "author": {
        "name": "> PokeUnite",
        "icon_url": "https://cdn.discordapp.com/avatars/874283205279252551/027941a622dc585682a547e1dbe26e1b.png"
      }
    }
  };
module.exports = {
    name: "cursed",
    description: 'Change & view your rank.',
    execute(message) {
        message.channel.createMessage(data)
    }
}