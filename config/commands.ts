import anime from "../src/commands/anime";
import avatar from "../src/commands/avatar";
import coin from "../src/commands/coin";
import dog from "../src/commands/dog";
import fox from "../src/commands/fox";
import help from "../src/commands/help";
import hi from "../src/commands/hi";
import image from "../src/commands/image";
import serverinfo from "../src/commands/serverinfo";

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
            name: [ "serverinfo", "sinfo" ],
            import: serverinfo
        },
        {
            name: [ "help", "h", "?" ],
            import: help
        }
    ]
}
