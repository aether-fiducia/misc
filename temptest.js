var net = require("net")

const DEFAULT_TIMEOUT = 5; // Seconds
const client = net.connect(25565, "corvuscorax.org", () =>
{
    var buff = Buffer.from([0xFE, 0x01]);
    client.write(buff);
});

client.setTimeout(DEFAULT_TIMEOUT * 1000);

client.on('data', (data) => {
    if (data == null) {
        client.end();
        process.exit();
    }
    var process = data.toString().split("\x00\x00\x00");
    for (const elem of process) {
        console.log(elem);
    }
});

client.on('timeout', () => {
    client.end();
    process.exit();
});
