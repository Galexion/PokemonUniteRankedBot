fs = require('fs');

module.exports = {
	execute(data,userid) {
    //Create a Regex
    var pattern = /[\\\[\]]/g;
    var useridpattern = /${userid}/g
    //Convert Discorddata into a string using JSON.stringify
    var x = JSON.stringify(data);
    // remake x by using the regex on it, substringing the first 2 charaters, then trimming it by 1 with the slice command.
    x = x.replace(pattern, "").substring(1, x.length - 1)

    fs.writeFile("./events/profiles.json", x, function (err,string) {
      if (err) return console.log(err);
      console.log('I have written ' + x + ' to profiles.json');
    });
    
	},
};