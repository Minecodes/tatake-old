import Discord from "discord.js";
import { customfox } from "randomfox";
import { error, info, log, warn, debug } from "./tools/logs";
import cmds from "../config/commands";
import { PREFIX, TOKEN, DEBUG } from "../config/config.json";
import disbut from 'discord-buttons';
var serverCount = 0;
process.env.TOKEN = TOKEN;
process.env.PREFIX = PREFIX;

const client = new Discord.Client();
setInterval(async () => {
    serverCount = 0;
    client.guilds.cache.map((server) => {
        serverCount++;
    });
    if (DEBUG) {
        debug("Info change (all 30 secs)");
        info(`Bot is on ${serverCount} servers`);
    }
    client.user.setPresence({
        status: "dnd"
    });
    client.user.setActivity(customfox([
        `On ${serverCount} servers`,
        "Open source on Github: https://github.com/Minecodes/tatake",
        "Usage: ::",
        "Floof!",
        "Support: https://discord.gg/hjwYPE2ZXu"
    ]), {
        name: "Tatake",
        type: "PLAYING"
    });
}, 30000);
disbut(client);

client.on("ready", () => {
    log(`Logged in as ${client.user.tag}`);
    //console.log(`Logged in as ${client.user.tag}`);
    if (DEBUG) {
        debug("Info change (all 30 secs)");
        //process.stdout.write(`[${chalk.cyan("Debug")}] Info change (all 30 secs)\n`);
    }
    client.guilds.cache.map((server) => {
        serverCount++;
    });
    //process.stdout.write(`[${chalk.green("Info")}] Bot is on ${serverCount} servers\n`);
    info(`Bot is on ${serverCount} servers`);
    client.user.setPresence({
        status: "dnd"
    });
    client.user.setActivity(customfox([
        `On ${client.guilds.cache.array.length} servers`,
        "Open source on Github: https://github.com/Minecodes/tatake",
        "Usage: ::",
        "Floof!",
        "Support: https://discord.gg/hjwYPE2ZXu"
    ]), {
        name: "Tatake",
        type: "PLAYING"
    });
});

client.on("error", (err) => {
    //process.stdout.write(`[${chalk.red("ERROR")}] ${error}\n`);
    error(err);
});

client.on("warn", (warnText) => {
    //process.stdout.write(`[${chalk.yellow("Warn")}] ${warnText}\n`);
    warn(warnText);
});

client.on("clickButton", async (button) => {
    switch(button.id) {
        case "close":
            button.reply.defer(true);
            button.message.delete();
            break;
        case "English":
                button.message.edit(
                    new Discord.MessageEmbed()
                        .setAuthor(
                            "Tatake",
                            "https://web-static.vercel.app/tatake-mini.png",
                            "https://github.com/Minecodes/tatake")
                        .setColor(0x5865f2)
                        .setDescription(`Hello! 👋🏻`));
                button.reply.defer(true);
                break;
            case "German":
                button.message.edit(
                    new Discord.MessageEmbed()
                        .setAuthor(
                            "Tatake",
                            "https://web-static.vercel.app/tatake-mini.png",
                            "https://github.com/Minecodes/tatake")
                        .setColor(0x3ba55d)
                        .setDescription(`Hallo! 👋🏻`));
                button.reply.defer(true);
                break;
            case "Latin":
                button.message.edit(
                    new Discord.MessageEmbed()
                        .setAuthor(
                            "Tatake",
                            "https://web-static.vercel.app/tatake-mini.png",
                            "https://github.com/Minecodes/tatake")
                        .setColor(0xed4245)
                        .setDescription(`Salve! 👋🏻`));
                button.reply.defer(true);
                break;
        case "fun":
            button.reply.defer(true);
            button.message.edit(
                new Discord.MessageEmbed()
                    .setAuthor(
                        "Tatake",
                        "https://web-static.vercel.app/tatake-mini.png",
                        "https://github.com/Minecodes/tatake")
                    .setTitle(/ Help /)
                    .setColor(0xE53935)
                    .setDescription(
`
coin | coins | coinmoney - flip a coin
hi | hello | salve - say hi 👋🏻
ping | pong - PONG!
`
                    )
            );
            break;
        case "infos":
            button.reply.defer(true);
            button.message.edit(
                new Discord.MessageEmbed()
                    .setAuthor(
                        "Tatake",
                        "https://web-static.vercel.app/tatake-mini.png",
                        "https://github.com/Minecodes/tatake")
                    .setTitle(/ Help /)
                    .setColor(0x00897B)
                    .setDescription(
`
avatar | selfie - get your avatar
help | h | ? - get this help
serverinfo | sinfo | si - get informations about the server
botinfo | binfo | bi - get informations about the bot - infos & internet
`
                    )
            );
            break;
        case "photos":
            button.reply.defer(true);
            button.message.edit(
                new Discord.MessageEmbed()
                    .setAuthor(
                        "Tatake",
                        "https://web-static.vercel.app/tatake-mini.png",
                        "https://github.com/Minecodes/tatake")
                    .setTitle(/ Help /)
                    .setColor(0x00ACC1)
                    .setDescription(
`
anime | naruto | titans | アニメ - anime art for the anime community -> "Be pure, be honest, be beautiful." - Sailor Moon
dog | doggo | doge - cute dog images 🐶
fox | foxes | floof | randomfox - floof! cute foxes 🦊
image | googleimage | googleimages | images | gi - random images
`
                    )
            );
            break;
        case "internet":
            button.reply.defer(true);
            button.message.edit(
                new Discord.MessageEmbed()
                    .setAuthor(
                        "Tatake",
                        "https://web-static.vercel.app/tatake-mini.png",
                        "https://github.com/Minecodes/tatake")
                    .setTitle(/ Help /)
                    .setColor(0x1E88E5)
                    .setDescription(
`
short | shorter | s - short your link/url
botinfo | binfo | bi - get informations about the bot - infos & internet
mathnumber | mathnumbers | mnum - get answer to numbers from math
trival | trivals - get answers to numbers
`
                    )
            );
            break;
        case "cancel":
            button.reply.defer(true);
            button.message.delete();
            break;
    }
});

client.on("message", message => {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot) return;

    const args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    const cmd = args.shift().toLowerCase();

    cmds.commands.map(command => {
        command.name.map(name => {
            if (name === cmd) {
                command.import(message, args, client);
            }
            else {
                return
            }
        });
    });
});

client.login(process.env.TOKEN);