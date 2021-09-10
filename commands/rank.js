const { notFound } = require("./append/embeds");

module.exports = {
    name: 'rank',
    description: 'Change & view your rank.',

    async execute(message, args, client, db) {
        let user = db.collection('users').doc(message.author.id);
        if (user.exist) { return message.channel.createMessage(notFound) }
        let userdebug = await user.get()
        let userinfo = userdebug.data()
        switch (args[1]) {
            case "change":
                message.channel.createMessage({
                    content: `> > Change Rank\n> Current Rank: ${userinfo.rank.rank} Class ${userinfo.rank.class}.`,
                    components: [{
                        "type": 1,
                        "components": [{
                            "type": 2,
                            "label": "Rank Down",
                            "style": 1,
                            "custom_id": "rankDown"
                        },
                        {
                            "type": 2,
                            "label": "Rank Up",
                            "style": 1,
                            "custom_id": "rankUp"
                        },
                        {
                            "type": 2,
                            "label": "More Options",
                            "style": 1,
                            "custom_id": "moreOptions"
                        }]
                    }]
                })
                message.channel.createMessage("The button's currently do not work.\n Use u.`rank rank down` or `u.rank rank up` or `u.rank rank more` for now.")
                break;



            default:
                message.channel.createMessage({
                    content: `> ${userinfo.name}'s Rank info\n> Rank ${userinfo.rank.rank} Class ${userinfo.rank.class}\n> To change this, choose from the buttons below.`,
                    // buttons that do nothing ATM, waiting for v16 for that
                    components: [{
                        "type": 1,
                        "components": [{
                            "type": 2,
                            "label": "Change Rank",
                            "style": 1,
                            "custom_id": "rankChange"
                        },
                        {
                            "type": 2,
                            "label": "Change Class",
                            "style": 1,
                            "custom_id": "classChange"
                        }]
                    }]
                })
                message.channel.createMessage("The button's currently do not work.\n Use u.`rank rank` or `u.rank class` for now.")
                break;
        }
    }
}
/* message.channel.createMessage({
            content:`> ${userinfo.name}'s Rank info\n> Rank ${userinfo.rank.rank} Class ${userinfo.rank.class}\n> To change this, choose from the buttons below.`,
            // buttons that do nothing ATM, waiting for v16 for that
            components: [{
                "type": 1,
                "components": [{
                    "type": 2,
                    "label": "Change Rank",
                    "style":1,
                    "custom_id":"rankChange"
                },
                {
                    "type": 2,
                    "label": "Change Class",
                    "style":1,
                    "custom_id":"classChange"
                }]
            }]
        }) */