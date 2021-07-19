import request from "request";
import embed from "../libs/embed";
import author from "../infos/author";
import { MessageButton } from "discord-buttons";

export default async (message, args, client) => {
    message.delete();
    request(`http://numbersapi.com/${args[0]}/math`, function (error, response, body) {
        message.channel.send(
            embed(
                `/ Math number ${args[0]} /`,
                author,
                body,
                0x03A9F4
            ),
            new MessageButton()
                .setEmoji("⛔")
                .setLabel("Close")
                .setID("close")
                .setStyle("red")
        );
    });
}