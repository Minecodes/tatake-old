import { customfox } from "randomfox";
import { MessageAttachment } from "discord.js";
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

export default async (message, args, client) => {
    message.delete();
    message.channel.send(new MessageAttachment(customfox(urls)));
}