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

if (msg.content.startsWith ("troll ")) {
        msg.channel.sendMessage("Well Id be a + msg.content.substr("test ".length + p.length) + "! ");
}
                                
// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
