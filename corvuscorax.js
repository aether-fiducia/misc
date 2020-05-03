const Discord = require("discord.js")
const client = new Discord.Client()
var net = require('net')
const config = require("./config.json")
require('buffer')
const serverstatus = config.servername
const DEFAULT_TIMEOUT = 5i
const changelog = require("./changelogs/May02.json")

client.login(config.token)

// On successful bot launch print to stdout
client.on("ready", () => {
    console.log("I am ready");
    console.log(client);
    client.user.setStatus("Players online: coming soon");
});

// On a message being sent to any channel of a connected server
client.on("message", (message) => {
    if ((!message.content.startsWith(config.prefix) && !message.content.startsWith("??")) || message.author.bot) return;
    if (message.content.startsWith("??")) {
        message.channel.send("Filler for help text");
    } else
    if (message.content.startsWith(config.prefix + "players")) {
        var hook = net.connect(25565, serverstatus, () => {
            var buff = Buffer.from([0xFE, 0x001]);
            hook.write(buff);
        });

        hook.on('data', (data) => {
            if (data == null) {
                hook.end();
                process.exit();
            }
            var process = data.toString().split("\x00\x00\x00");
            message.channel.send(process[4] + ' of 20 players online.');
            
        });

        hook.on('error', (error) => {
            console.log(error);
            message.channel.send('I ran into an error, pinging @Admin. Maybe the server is down?');
        });
    }
    else if (message.content.startsWith(config.prefix + "changes")) {
        message.channel.send("'''json\n" + changlog.recent + "\n'''");
    }
});

setInterval(function() {

}, 60 * 1000);

