export default async (message, args, client) => {
    message.delete();
    message.channel.send(`Here is your avatar <@${message.author.id}> -> ${message.author.displayAvatarURL()}`);
}