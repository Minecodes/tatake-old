import anime from "../src/commands/anime";
import avatar from "../src/commands/avatar";
import botinfo from "../src/commands/botinfo";
import coin from "../src/commands/coin";
import dog from "../src/commands/dog";
import fox from "../src/commands/fox";
import help from "../src/commands/help";
import hi from "../src/commands/hi";
import image from "../src/commands/image";
import mathnumbers from "../src/commands/mathnumbers";
import ping from "../src/commands/ping";
import serverinfo from "../src/commands/serverinfo";
import trivia from "../src/commands/trivia";

export default {
    commands: [
        {
            name: [ "hi", "hello", "salve" ],
            import: hi
        },
        {
            name: [ "coin", "coins", "coinmoney" ],
            import: coin
        },
        {
            name: [ "dog", "doggo", "doge" ],
            import: dog
        },
        {
            name: [ "avatar", "selfie" ],
            import: avatar
        },
        {
            name: [ "anime", "naruto", "titans", "アニメ" ],
            import: anime
        },
        {
            name: [ "fox", "foxes", "floof", "randomfox" ],
            import: fox
        },
        {
            name: [ "image", "googleimage", "googleimages", "images", "gi" ],
            import: image
        },
        {
            name: [ "serverinfo", "sinfo", "si" ],
            import: serverinfo
        },
        {
            name: [ "help", "h", "?" ],
            import: help
        },
        {
            name: [ "botinfo", "binfo", "bi" ],
            import: botinfo
        },
        {
            name: [ "mathnumber", "mathnumbers", "mnum", "mathnum", "mathnumb", "mathnumbs" ],
            import: mathnumbers
        },
        {
            name: [ "trival", "trivals", "secnumbs" ],
            import: trivia
        },
        {
            name: [ "ping", "pong", "dopedo" ],
            import: ping
        }
    ]
}