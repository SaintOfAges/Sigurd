const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'hi') {
    	message.reply('hoi');
  	}
});

client.on('message', message => {
    if (message.content === 'Sigurd') {
    	message.reply('My Papa!');
  	}
});

client.on('message', message => {
    if (message.content === 'bored') {
    	message.reply('Lets do something!');
  	}
});
client.on('message', message => {
    if (message.content === 'lolmayo') {
    	message.reply('Hey I love that! <3');
  	}
});

client.on('message', message => {
    if (message.content === 'lol') {
    	message.reply('Fufufufu!!!');
  	}
});

client.on('message', message => {
    if (message.content === '@L_Yagami#3482') {
    	message.reply('I feel homesick sometimes ;-;');
  	}
});
client.on('message', message => {
    if (message.content === 'Jacques') {
    	message.reply('I didnt do anything!!!');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
