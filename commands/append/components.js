//Buttons & Menus
const ErisComponents = require('eris-components');
const { match } = require('./embeds');
//button fallback
module.exports = {
    ranked(user) {
        return new ErisComponents.Button().setLabel(`Ranked (${user.rank.rank})`).setID('rankedbutton').setStyle('blurple');
    },
    standard() {
        return new ErisComponents.Button()
            .setLabel(`Standard Mode`)
            .setID('standardButton')
            .setStyle('blurple');
    },
    quick() {
        return new ErisComponents.Button()
            .setLabel(`Quick Mode`)
            .setID('quickbutton')
            .setStyle('blurple');
    },
    // Action Rows
    matchbuttons(user) {
        const Button1 = new ErisComponents.Button()
            .setLabel(`Ranked (${user.rank.rank})`)
            .setID('rankedButton')
            .setStyle('blurple');
        const Button2 = new ErisComponents.Button()
            .setLabel(`Standard Mode`)
            .setID('standardButton')
            .setStyle('blurple');
        const Button3 = new ErisComponents.Button()
            .setLabel(`Quick Mode`)
            .setID('quickButton')
            .setStyle('blurple');
        return new ErisComponents.ActionRow()
            .addComponents([Button1, Button2, Button3]);
    }
}