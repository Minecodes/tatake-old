"use strict";
exports.__esModule = true;
var discord_js_1 = require("discord.js");
exports["default"] = (function (title, author, description, color, moreOptions) {
    var embed = new discord_js_1.MessageEmbed()
        .setAuthor(author.name, author.pictureURL, author.URL)
        .setTitle(title)
        .setDescription(description)
        .setColor(color);
    if (moreOptions) {
        if (moreOptions.fields) {
            embed.addFields(moreOptions.fields);
        }
        if (moreOptions.footer) {
            embed.setFooter(moreOptions.footer);
        }
        if (moreOptions.image) {
            embed.setImage(moreOptions.image);
        }
        if (moreOptions.thumbnail) {
            embed.setThumbnail(moreOptions.thumbnail);
        }
        if (moreOptions.timestamp) {
            embed.setTimestamp(moreOptions.timestamp);
        }
    }
    return embed;
});
