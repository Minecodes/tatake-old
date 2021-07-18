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
var randomfox_1 = require("randomfox");
var discord_js_1 = require("discord.js");
var urls = [
    "https://cdn.pixabay.com/photo/2020/12/13/16/21/stork-5828727_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/19/02/50/man-6029064_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/09/26/07/05/sea-5603352_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/03/09/14/33/dog-6082017_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/08/12/40/lasagna-5994612_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/15/08/35/breakwater-6017041_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/03/07/08/44/bee-6075541_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/03/06/20/54/beverages-6074749_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/26/20/19/sisters-6053044_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/03/02/15/01/bird-6062768_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/03/03/20/31/theater-6066228_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/01/16/22/flamingo-5971206_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/03/04/13/13/cherry-blossom-6068004_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/01/20/16/yachts-5971866_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/09/09/03/dog-5997842_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/12/15/16/12/coneflower-5834129_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/01/24/20/47/tabby-5946499_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/19/08/58/mountains-6029596_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/17/14/29/coffee-6024401_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/02/06/12/31/dresden-5987976_960_720.jpg",
    "https://cdn.pixabay.com/photo/2021/01/18/18/03/trees-5928982_960_720.jpg",
    "https://cdn.pixabay.com/photo/2020/08/17/18/38/cat-5496162_960_720.jpg"
];
exports["default"] = (function (message, args, client) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        message["delete"]();
        message.channel.send(new discord_js_1.MessageAttachment(randomfox_1.customfox(urls)));
        return [2];
    });
}); });
