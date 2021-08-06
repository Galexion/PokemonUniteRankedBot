module.exports = {
    userlookup(user1, message) {
        console.log(user)
        user1 = JSON.stringify(user1)
        console.log(user1)
        const userlookup = {
            "title": `Profile Info: ${user1.name}`,
            "color": 2884926,
            "footer": {
                "text": `Pokémon Unite User Lookup / Trainer ID: ${user1.TrainerID}`
            },
            "author": {
                "name": "Pokémon Unite Ranked Bot: Search Mode"
            },
            "fields": [{
                    "name": "Current MAIN pokémon:",
                    "value": `${user1.mains.one}`
                },
                {
                    "name": "Current Rank:",
                    "value": `${user1.rank.rank} class ${user1.rank.class}`
                }
            ]
        };
        const userlookup2 = {
            "title": `Profile Info: ${user1.name}`,
            "color": 2884926,
            "footer": {
                "text": `Pokémon Unite User Lookup / Trainer ID: ${user1.TrainerID}`
            },
            "author": {
                "name": "Pokémon Unite Ranked Bot: Search Mode"
            },
            "fields": [{
                    "name": "Current MAIN pokémon:",
                    "value": `${user1.mains.one}, ${user1.mains.two}`
                },
                {
                    "name": "Current Rank:",
                    "value": `${user1.rank.rank} class ${user1.rank.class}`
                }
            ]
        };

        if (user1.mains.two === undefined) {
            message.channel.send({embed: userlookup2});
        } else {
            message.channel.send({embed: userlookup});
        }

    }
}