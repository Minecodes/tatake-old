import { customfox } from "randomfox";
import { MessageEmbed } from "discord.js";
var msgs = [ "Head", "Tails", "Head", "Tails", "Head", "Tails", "Head", "Tails", "Head", "Tails", "Head", "Tails" ];

export default async (message, args, client) => {
    message.delete();
    message.channel.send(
        new MessageEmbed()
            .setAuthor(
                "Tatake",
                "https://web-static.vercel.app/tatake-mini.png",
                "https://github.com/Minecodes/tatake")
            .setColor(0xFDD835)
            .setDescription(`<@${message.author.id}> ${customfox(msgs)}`)
    );
}