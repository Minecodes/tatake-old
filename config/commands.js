"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
var anime_1 = __importDefault(require("../src/commands/anime"));
var avatar_1 = __importDefault(require("../src/commands/avatar"));
var coin_1 = __importDefault(require("../src/commands/coin"));
var dog_1 = __importDefault(require("../src/commands/dog"));
var fox_1 = __importDefault(require("../src/commands/fox"));
var help_1 = __importDefault(require("../src/commands/help"));
var hi_1 = __importDefault(require("../src/commands/hi"));
var image_1 = __importDefault(require("../src/commands/image"));
var serverinfo_1 = __importDefault(require("../src/commands/serverinfo"));
var short_1 = __importDefault(require("../src/commands/short"));
var test_1 = __importDefault(require("../src/commands/test"));
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
            name: ["serverinfo", "sinfo"],
            "import": serverinfo_1["default"]
        },
        {
            name: ["short", "shorter", "s"],
            "import": short_1["default"]
        },
        {
            name: ["t", "test"],
            "import": test_1["default"]
        },
        {
            name: ["help", "h", "?"],
            "import": help_1["default"]
        }
    ]
};
