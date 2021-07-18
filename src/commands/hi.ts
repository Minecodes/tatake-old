import { MessageEmbed } from "discord.js";
import { MessageButton, MessageActionRow } from "discord-buttons";

export default async (message, args, client) => {
    message.delete();
    var b1 = new MessageButton()
        .setID("English")
        .setLabel("English")
        .setStyle("blurple")

    var b2 = new MessageButton()
        .setID("German")
        .setLabel("German")
        .setStyle("green")

    var b3 = new MessageButton()
        .setID("Latin")
        .setLabel("Latin")
        .setStyle("red")

    var row = new MessageActionRow()
        .addComponents(b1, b2, b3);

    message.channel.send(
        new MessageEmbed()
            .setAuthor(
                "Tatake",
                "https://web-static.vercel.app/tatake-mini.png",
                "https://github.com/Minecodes/tatake")
            .setColor(0xD500F9)
            .setDescription(`Hi! 👋🏻`),
        row
    );
}