"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var discord_js_1 = require("discord.js");
var discord_buttons_1 = require("discord-buttons");
exports["default"] = (function (message, args, client) { return __awaiter(void 0, void 0, void 0, function () {
    var b1, b2, b3, b4, cancel, menu;
    return __generator(this, function (_a) {
        b1 = new discord_buttons_1.MessageButton()
            .setEmoji("🔮")
            .setLabel("Fun")
            .setID("fun")
            .setStyle("blurple");
        b2 = new discord_buttons_1.MessageButton()
            .setEmoji("🔎")
            .setLabel("Infos")
            .setID("infos")
            .setStyle("green");
        b3 = new discord_buttons_1.MessageButton()
            .setEmoji("📸")
            .setLabel("Photos")
            .setID("photos")
            .setStyle("gray");
        b4 = new discord_buttons_1.MessageButton()
            .setEmoji("🤖")
            .setLabel("Internet")
            .setID("internet")
            .setStyle("red");
        cancel = new discord_buttons_1.MessageButton()
            .setEmoji("⛔")
            .setLabel("Cancel")
            .setID("cancel")
            .setStyle("grey");
        menu = new discord_buttons_1.MessageActionRow()
            .addComponents(b1, b2, b3, b4, cancel);
        message["delete"]();
        message.channel.send(new discord_js_1.MessageEmbed()
            .setAuthor("Tatake", "https://web-static.vercel.app/tatake-mini.png", "https://github.com/Minecodes/tatake")
            .setTitle(/ Help /)
            .setColor(0xF4511E)
            .setDescription("")
            .addField("🔮 Fun 🔮", "coin, hi, etc.", false)
            .addField("🔎 Infos 🔎", "avatar, help, etc.", false)
            .addField("📷 Photos 📸", "anime, fox, etc.", false)
            .addField("🤖 Internet 🤖", "short", false), menu);
        return [2];
    });
}); });
