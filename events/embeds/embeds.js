module.exports = {
    userlookup(user, message) {
        console.log(user)
        user = JSON.stringify(user)
        console.log(user)
        const userlookup = {
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
                }
            ]
        };
        const userlookup2 = {
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
                    "value": `${user.mains.one}, ${user.mains.two}`
                },
                {
                    "name": "Current Rank:",
                    "value": `${user.rank.rank} class ${user.rank.class}`
                }
            ]
        };

        if (user.mains.two === undefined) {
            message.channel.send({embed: userlookup2});
        } else {
            message.channel.send({embed: userlookup});
        }

    }
}