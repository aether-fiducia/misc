var net = require("net")

const DEFAULT_TIMEOUT = 5; // Seconds
const hook = net.connect(25565, "corvuscorax.org", () =>
{
    var buff = Buffer.from([0xFE, 0x01]);
    hook.write(buff);
});

hook.setTimeout(DEFAULT_TIMEOUT * 1000);

hook.on('data', (data) => {
    if (data == null) {
        hook.end();
        process.exit();
    }
    var process = data.toString().split("\x00\x00\x00");
    for (const elem of process) {
        console.log(elem);
    }
});

hook.on('timeout', () => {
    hook.end();
    process.exit();
});
