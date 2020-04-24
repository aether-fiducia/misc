const Discord = require("discord.js")
const client = new Discord.Client()
var net = require('net)
const config = require("./config.json")

const serverstatus = config.servername
const DEFAULT_TIMEOUT = 5
const hook = net.connect(25565, config.hostname, () => {
    var buff = buffer.from([0xFE, 0x001]);
    hook.write(buff);
});
hook.setTimmeout(DEFAULT_TIMEOUT * 1000)

client.login(config.token)

// On successful bot launch print to stdout
client.on("ready", () => {
    console.log("I am ready");
    console.log(client);
    client.user.setStatus("Players online: " +
});

// On a message being sent to any channel of a connected server
client.on("message", (message) => {
    if ((!message.content.startsWith(config.prefix) && !message.content.startsWith("??")) || message.author.bot) return;
    if (message.content.startsWith("??")) {
        message.channel.send("Filler for help text");
    } else
    if (message.content.startsWith(config.prefix + "players")) {
        message.channel.send("Filler for when players are listed");
    }
});

setInterval(function() {

}, 60 * 1000);

