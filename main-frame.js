const Discord = require('discord.js');
const client = new Discord.Client();
const fs = require('fs');
const token = require('./Configurations/settings.json').token;
const prefix = ";";

client.on('ready',() => {
	console.log('SBXBot\'s Main-Frame is up and running!');
	client.user.setActivity(';help | Operational')
});
;


client.on('message', message => {
	if (message.content.startsWith("<@261932880786096130>")) {
		message.channel.sendMessage("You can't talk to me, I'm a bot! Try ;commands");
	}

	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'ping')) {
		message.channel.sendMessage('Pong! \'' + (Date.now() - message.createdTimestamp) + '\' miliseconds had passed for your message to get to me!');
		console.log('Pong message was sent');
	} else

	if (message.content.startsWith(prefix + 'botinfo')) {
		message.channel.sendMessage('Currently Version 1.0055; 10.07.2017 09:47 PM CST Updated');
		console.log('Version message was sent');
	} else 
	if (message.content.startsWith(prefix + 'serverinfo')) {
		message.channel.sendMessage('__**Server Info:**__ ```Current Version: 4 | Version Stage: Pre-Alpha | Server Created: 08.28.2017```');
		console.log('Server Info message was sent');
	} else
	if (message.content.startsWith(prefix + 'commands')) {
		message.channel.sendMessage('Unavailible Command at this time, please check back later!');
		console.log('Commmands message was sent');
	} else 
	if (message.content.startsWith(prefix + 'help')) {
		message.channel.sendMessage('Current Commands, ;ping, ;botinfo, ;serverinfo, ;commands, ;help, ;thelp');
		console.log('Thelp message was sent');
	} else
	if (message.content.startsWith(prefix + '')) {
		message.channel.sendMessage('Unavailible Command at this time, please check back later!');
		console.log('Help message was sent');
		
	}

});

client.on("guildCreate", guild => {
	console.log('New guild added: ${guild.name}, owned by ${guild.owner.user.username}');
});
client.login(token);
