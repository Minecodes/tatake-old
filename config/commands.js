"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var anime_1 = __importDefault(require("../src/commands/anime"));
var avatar_1 = __importDefault(require("../src/commands/avatar"));
var botinfo_1 = __importDefault(require("../src/commands/botinfo"));
var coin_1 = __importDefault(require("../src/commands/coin"));
var dog_1 = __importDefault(require("../src/commands/dog"));
var fox_1 = __importDefault(require("../src/commands/fox"));
var help_1 = __importDefault(require("../src/commands/help"));
var hi_1 = __importDefault(require("../src/commands/hi"));
var image_1 = __importDefault(require("../src/commands/image"));
var mathnumbers_1 = __importDefault(require("../src/commands/mathnumbers"));
var ping_1 = __importDefault(require("../src/commands/ping"));
var serverinfo_1 = __importDefault(require("../src/commands/serverinfo"));
var trivia_1 = __importDefault(require("../src/commands/trivia"));
exports["default"] = {
    commands: [
        {
            name: ["hi", "hello", "salve"],
            "import": hi_1["default"]
        },
        {
            name: ["coin", "coins", "coinmoney"],
            "import": coin_1["default"]
        },
        {
            name: ["dog", "doggo", "doge"],
            "import": dog_1["default"]
        },
        {
            name: ["avatar", "selfie"],
            "import": avatar_1["default"]
        },
        {
            name: ["anime", "naruto", "titans", "アニメ"],
            "import": anime_1["default"]
        },
        {
            name: ["fox", "foxes", "floof", "randomfox"],
            "import": fox_1["default"]
        },
        {
            name: ["image", "googleimage", "googleimages", "images", "gi"],
            "import": image_1["default"]
        },
        {
            name: ["serverinfo", "sinfo", "si"],
            "import": serverinfo_1["default"]
        },
        {
            name: ["help", "h", "?"],
            "import": help_1["default"]
        },
        {
            name: ["botinfo", "binfo", "bi"],
            "import": botinfo_1["default"]
        },
        {
            name: ["mathnumber", "mathnumbers", "mnum", "mathnum", "mathnumb", "mathnumbs"],
            "import": mathnumbers_1["default"]
        },
        {
            name: ["trival", "trivals", "secnumbs"],
            "import": trivia_1["default"]
        },
        {
            name: ["ping", "pong", "dopedo"],
            "import": ping_1["default"]
        }
    ]
};
