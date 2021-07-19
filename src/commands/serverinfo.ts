import author from "../infos/author";
import embed from "../libs/embed";
import { MessageButton } from "discord-buttons";

export default async (message, args, client) => {
    message.delete();
    message.channel.send(embed(
        "/ ServerInfo /",
        author,
`
Name - ${message.guild.name}
Members - ${message.guild.memberCount}
Region - ${message.guild.region}
ID - ${message.guild.id}
Owner - ${message.guild.owner}
`,
        0xF44336,
        {
            image: message.guild.iconURL()
        }
    ),
    new MessageButton()
            .setEmoji("⛔")
            .setLabel("Close")
            .setID("close")
            .setStyle("red")
    );
}