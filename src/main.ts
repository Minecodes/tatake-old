import Discord from "discord.js";
//import config from "../config/config";
import { config } from "dotenv";
import cmds from "../config/commands";
import disbut from 'discord-buttons';
config();

const client = new Discord.Client();
disbut(client);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
})

client.on("clickButton", async (button) => {
    switch(button.id) {
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
Incoming...
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