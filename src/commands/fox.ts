import { fox } from "randomfox";
import { MessageAttachment } from "discord.js";
export default async (message, args, client) => {
    message.delete();
    message.channel.send(new MessageAttachment(fox()));
}