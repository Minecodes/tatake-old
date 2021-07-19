import author from "../infos/author";
import embed from "../libs/embed";
import { EmbedFieldData } from "discord.js";
import { MessageButton } from "discord-buttons";
var sc = 0;

export default async (message, args, client) => {
    message.delete();
    sc = 0;
    await client.guilds.cache.map((server) => {
        sc++;
    });
    var owner: EmbedFieldData = {
        name: "Owner",
        value: "Minecodes",
        inline: true
    };
    var scount: EmbedFieldData = {
        name: "Servercount",
        value: sc,
        inline: true
    }
    var ppic: EmbedFieldData = {
        name: "Profile photo",
        value: client.user.avatarURL(),
        inline: true
    }
    var id: EmbedFieldData = {
        name: "ID",
        value: client.user.id,
        inline: true
    }
    var tag: EmbedFieldData = {
        name: "Tag",
        value: client.user.tag,
        inline: true
    }
    message.channel.send(
        embed(
            "/ BotInfo /",
            author,
            "",
            0xFF7043,
            {
                fields: [
                    owner,
                    scount,
                    ppic,
                    id,
                    tag
                ],
                image: author.pictureURL
            }
        ),
        new MessageButton()
            .setEmoji("⛔")
            .setLabel("Close")
            .setID("close")
            .setStyle("red")
    );
}