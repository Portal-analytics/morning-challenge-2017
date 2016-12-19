const textMeme = require('text-meme');

if (process.argv.length === 2) {
  var input = "Fucking Make Sales, You Bitch"
}
else {
  var input = process.argv[2]
}

textMeme(input, {delay: 500, filename: 'message.gif', background: '#ef40cc'}).then(function (filename) {
    console.log(filename);
});
