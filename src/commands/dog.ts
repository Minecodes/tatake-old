import request from "request";
import { MessageAttachment } from "discord.js";
import { MessageButton } from "discord-buttons";

export default async (message, args, client) => {
    message.delete();
    request('https://random.dog/woof.json', function (error, response, body) {
        message.channel.send(
            new MessageAttachment(JSON.parse(body).url)
        );
    });
}