import { MessageEmbed, EmbedFieldData, ColorResolvable } from "discord.js";
import { EmbedAuthor, EmbedAdditionalOptions } from "../tools/types";

export default (title: String, author: EmbedAuthor, description: String, color: ColorResolvable, moreOptions?: EmbedAdditionalOptions) => {
    var embed = new MessageEmbed()
        .setAuthor(
            author.name,
            author.pictureURL,
            author.URL
        )
        .setTitle(title)
        .setDescription(description)
        .setColor(color)
    if (moreOptions) {
        if (moreOptions.fields) {
            embed.addFields(moreOptions.fields)
        }
        if (moreOptions.footer) {
            embed.setFooter(moreOptions.footer)
        }
        if (moreOptions.image) {
            embed.setImage(moreOptions.image)
        }
        if (moreOptions.thumbnail) {
            embed.setThumbnail(moreOptions.thumbnail)
        }
        if (moreOptions.timestamp) {
            embed.setTimestamp(moreOptions.timestamp)
        }
    }
    return embed;
}