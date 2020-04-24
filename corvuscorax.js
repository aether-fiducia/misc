const Discord = require("discord.js")
const client = new Discord.Client()
const config = require("./config.json")
// Future...
const serverstatus = config.servername

// On successful bot launch print to stdout
client.on("ready", () => {
    console.log("I am ready");
    console.log(client);
});

// On a message being sent to any channel of a connected server
client.on("message", (message) => {
    if (!message.content.startsWith(config.prefix) || !message.content.startsWith("??") || message.author.bot) return;
    if (message.content.startsWith("??")) {
        console.log("Read message : ??");
        message.channel.send("Filler for help text");
    } else
    if (message.content.startsWith(config.prefix + "players")) {
        console.log("Read message : ??");
        message.channel.send("Filler for when players are listed");
    } else
    if (message.content.startsWith(config.prefix + "deaths")) {
        console.log("Read message : ??");
        message.channel.send("Filler for when death data is shown");
    }
});

client.login(config.token)
