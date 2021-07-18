import { MessageEmbed } from "discord.js"
import { MessageButton, MessageActionRow } from "discord-buttons"

export default async (message, args, client) => {
    var b1 = new MessageButton()
        .setEmoji("🔮")
        .setLabel("Fun")
        .setID("fun")
        .setStyle("blurple");
    var b2 = new MessageButton()
        .setEmoji("🔎")
        .setLabel("Infos")
        .setID("infos")
        .setStyle("green");
    var b3 = new MessageButton()
        .setEmoji("📸")
        .setLabel("Photos")
        .setID("photos")
        .setStyle("gray");
    var b4 = new MessageButton()
        .setEmoji("🤖")
        .setLabel("Internet")
        .setID("internet")
        .setStyle("red");
    var cancel = new MessageButton()
        .setEmoji("⛔")
        .setLabel("Cancel")
        .setID("cancel")
        .setStyle("grey");
    var menu = new MessageActionRow()
        .addComponents(b1, b2, b3, b4, cancel);
    message.delete();
    message.channel.send(
        new MessageEmbed()
            .setAuthor(
                "Tatake",
                "https://web-static.vercel.app/tatake-mini.png",
                "https://github.com/Minecodes/tatake")
            .setTitle(/ Help /)
            .setColor(0xF4511E)
            .setDescription("")
            .addField("🔮 Fun 🔮", "coin, hi, etc.", false)
            .addField("🔎 Infos 🔎", "avatar, help, etc.", false)
            .addField("📷 Photos 📸", "anime, fox, etc.", false)
            .addField("🤖 Internet 🤖", "short", false),
        menu
    );
}