import { MessageEmbed } from "discord.js";


export default async (message, args, client) => {
    message.delete();
    message.channel.send(new MessageEmbed()
    .setTitle(/ ServerInfo /)
    .setColor(0xffffff)
    .setAuthor(
        "Tatake",
        "https://web-static.vercel.app/tatake-mini.png",
        "https://github.com/Minecodes/tatake")
    .setImage(message.guild.iconURL())
    .setDescription(`
Name - ${message.guild.name}
Members - ${message.guild.memberCount}
Region - ${message.guild.region}
ID - ${message.guild.id}
Owner - ${message.guild.owner}
`));
}