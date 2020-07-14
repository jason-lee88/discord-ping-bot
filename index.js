const Discord = require("discord.js");
const client = new Discord.Client();

var prefix = "!"
var channelName = "ping-bot"

client.once("ready", () => {
	console.log(client.user.username + " is online!");
});

client.on("message", message => {
    if (message.content == prefix + "ping" && message.channel.name == channelName) {
        message.channel.send("Pong!").then(response => {
            var ping = response.createdAt - message.createdAt;
            message.channel.send(ping + " ms")
        });
    }
});

client.login(process.env.TOKEN);