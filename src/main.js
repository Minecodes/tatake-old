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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var discord_js_1 = __importDefault(require("discord.js"));
var randomfox_1 = require("randomfox");
var logs_1 = require("./tools/logs");
var commands_1 = __importDefault(require("../config/commands"));
var config_json_1 = require("../config/config.json");
var discord_buttons_1 = __importDefault(require("discord-buttons"));
var serverCount = 0;
process.env.TOKEN = config_json_1.TOKEN;
process.env.PREFIX = config_json_1.PREFIX;
var client = new discord_js_1["default"].Client();
setInterval(function () { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        serverCount = 0;
        client.guilds.cache.map(function (server) {
            serverCount++;
        });
        if (config_json_1.DEBUG) {
            logs_1.debug("Info change (all 30 secs)");
            logs_1.info("Bot is on " + serverCount + " servers");
        }
        client.user.setPresence({
            status: "dnd"
        });
        client.user.setActivity(randomfox_1.customfox([
            "On " + serverCount + " servers",
            "Open source on Github: https://github.com/Minecodes/tatake",
            "Usage: ::",
            "Floof!",
            "Support: https://discord.gg/hjwYPE2ZXu"
        ]), {
            name: "Tatake",
            type: "PLAYING"
        });
        return [2];
    });
}); }, 30000);
discord_buttons_1["default"](client);
client.on("ready", function () {
    logs_1.log("Logged in as " + client.user.tag);
    if (config_json_1.DEBUG) {
        logs_1.debug("Info change (all 30 secs)");
    }
    client.guilds.cache.map(function (server) {
        serverCount++;
    });
    logs_1.info("Bot is on " + serverCount + " servers");
    client.user.setPresence({
        status: "dnd"
    });
    client.user.setActivity(randomfox_1.customfox([
        "On " + client.guilds.cache.array.length + " servers",
        "Open source on Github: https://github.com/Minecodes/tatake",
        "Usage: ::",
        "Floof!",
        "Support: https://discord.gg/hjwYPE2ZXu"
    ]), {
        name: "Tatake",
        type: "PLAYING"
    });
});
client.on("error", function (err) {
    logs_1.error(err);
});
client.on("warn", function (warnText) {
    logs_1.warn(warnText);
});
client.on("clickButton", function (button) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (button.id) {
            case "close":
                button.reply.defer(true);
                button.message["delete"]();
                break;
            case "English":
                button.message.edit(new discord_js_1["default"].MessageEmbed()
                    .setAuthor("Tatake", "https://web-static.vercel.app/tatake-mini.png", "https://github.com/Minecodes/tatake")
                    .setColor(0x5865f2)
                    .setDescription("Hello! \uD83D\uDC4B\uD83C\uDFFB"));
                button.reply.defer(true);
                break;
            case "German":
                button.message.edit(new discord_js_1["default"].MessageEmbed()
                    .setAuthor("Tatake", "https://web-static.vercel.app/tatake-mini.png", "https://github.com/Minecodes/tatake")
                    .setColor(0x3ba55d)
                    .setDescription("Hallo! \uD83D\uDC4B\uD83C\uDFFB"));
                button.reply.defer(true);
                break;
            case "Latin":
                button.message.edit(new discord_js_1["default"].MessageEmbed()
                    .setAuthor("Tatake", "https://web-static.vercel.app/tatake-mini.png", "https://github.com/Minecodes/tatake")
                    .setColor(0xed4245)
                    .setDescription("Salve! \uD83D\uDC4B\uD83C\uDFFB"));
                button.reply.defer(true);
                break;
            case "fun":
                button.reply.defer(true);
                button.message.edit(new discord_js_1["default"].MessageEmbed()
                    .setAuthor("Tatake", "https://web-static.vercel.app/tatake-mini.png", "https://github.com/Minecodes/tatake")
                    .setTitle(/ Help /)
                    .setColor(0xE53935)
                    .setDescription("\ncoin | coins | coinmoney - flip a coin\nhi | hello | salve - say hi \uD83D\uDC4B\uD83C\uDFFB\nping | pong - PONG!\n"));
                break;
            case "infos":
                button.reply.defer(true);
                button.message.edit(new discord_js_1["default"].MessageEmbed()
                    .setAuthor("Tatake", "https://web-static.vercel.app/tatake-mini.png", "https://github.com/Minecodes/tatake")
                    .setTitle(/ Help /)
                    .setColor(0x00897B)
                    .setDescription("\navatar | selfie - get your avatar\nhelp | h | ? - get this help\nserverinfo | sinfo | si - get informations about the server\nbotinfo | binfo | bi - get informations about the bot - infos & internet\n"));
                break;
            case "photos":
                button.reply.defer(true);
                button.message.edit(new discord_js_1["default"].MessageEmbed()
                    .setAuthor("Tatake", "https://web-static.vercel.app/tatake-mini.png", "https://github.com/Minecodes/tatake")
                    .setTitle(/ Help /)
                    .setColor(0x00ACC1)
                    .setDescription("\nanime | naruto | titans | \u30A2\u30CB\u30E1 - anime art for the anime community -> \"Be pure, be honest, be beautiful.\" - Sailor Moon\ndog | doggo | doge - cute dog images \uD83D\uDC36\nfox | foxes | floof | randomfox - floof! cute foxes \uD83E\uDD8A\nimage | googleimage | googleimages | images | gi - random images\n"));
                break;
            case "internet":
                button.reply.defer(true);
                button.message.edit(new discord_js_1["default"].MessageEmbed()
                    .setAuthor("Tatake", "https://web-static.vercel.app/tatake-mini.png", "https://github.com/Minecodes/tatake")
                    .setTitle(/ Help /)
                    .setColor(0x1E88E5)
                    .setDescription("\nshort | shorter | s - short your link/url\nbotinfo | binfo | bi - get informations about the bot - infos & internet\nmathnumber | mathnumbers | mnum - get answer to numbers from math\ntrival | trivals - get answers to numbers\n"));
                break;
            case "cancel":
                button.reply.defer(true);
                button.message["delete"]();
                break;
        }
        return [2];
    });
}); });
client.on("message", function (message) {
    if (!message.content.startsWith(process.env.PREFIX) || message.author.bot)
        return;
    var args = message.content.slice(process.env.PREFIX.length).split(/ +/);
    var cmd = args.shift().toLowerCase();
    commands_1["default"].commands.map(function (command) {
        command.name.map(function (name) {
            if (name === cmd) {
                command["import"](message, args, client);
            }
            else {
                return;
            }
        });
    });
});
client.login(process.env.TOKEN);
