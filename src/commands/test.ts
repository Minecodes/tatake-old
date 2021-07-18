import { MessageButton } from "discord-buttons"

export default async (message, args, client) => {
    let button = new MessageButton()
        .setLabel("Hi")
        .setStyle("url")
        .setURL("https://www.thisworldthesedays.com/bookhead.html");
    message.channel.send("Hi 👋🏻", button);
}