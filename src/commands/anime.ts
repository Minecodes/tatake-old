import { customfox } from "randomfox";
import { MessageAttachment } from "discord.js";

var animes = [
    "https://wallup.net/wp-content/uploads/2016/07/23/70706-anime_girls-cat_ears-balloons.jpg",
    "http://www.hdwallpapers.in/download/anime_girls_28-1280x960.jpg",
    "https://get.wallhere.com/photo/anime-anime-girls-original-characters-blue-eyes-winter-1601517.jpg",
    "https://1.bp.blogspot.com/-Vf0PHrUXnZc/UHGJXM69YQI/AAAAAAAAAYw/IbRQ-NvZ36c/s1600/anime+girl+12.jpg",
    "https://www.hdwallpapers.in/download/anime_girls_12-1600x1200.jpg",
    "https://www.hdwallpapers.in/download/anime_girls_22-1152x864.jpg",
    "http://img0.joyreactor.com/pics/post/full/anime-Anime-Original-2639444.jpeg",
    "http://www.pixelstalk.net/wp-content/uploads/2016/10/Charlotte-Anime-Wallpaper-HD.jpg",
    "https://www.pixelstalk.net/wp-content/uploads/2016/12/Download-Android-Anime-Picture.jpg",
    "http://3.bp.blogspot.com/-2_rEeGzY1c8/TzoSImKQfDI/AAAAAAAAUmk/JW7XKXMPuHY/s1600/sexy-anime-girl-wallpaper.jpg",
    "http://papers.co/wallpaper/papers.co-aw87-hatsune-milk-anime-girl-illustration-art-33-iphone6-wallpaper.jpg",
    "https://www.hdwallpapers.in/download/hatsune_miku_anime_girl_5k-540x960.jpg",
    "https://www.mordeo.org/files/uploads/2020/01/Anime-Girl-Butterfly-Crown-4K-Ultra-HD-Mobile-Wallpaper.jpg",
    "http://www.pngall.com/wp-content/uploads/2016/07/Anime.png",
    "https://www.hdwallpapers.in/download/anime_girl_192-1280x1024.jpg",
    "https://www.hdwallpapers.in/download/cute_anime_girl_4k_2-1440x2560.jpg",
    "https://www.hdwallpapers.in/download/anime_girl_6-1920x1080.jpg",
    "https://wallup.net/wp-content/uploads/2016/04/10/324543-anime-anime_girls-Patchouli_Knowledge-Touhou.jpg",
    "https://s3.amazonaws.com/bgn2018media/wp-content/uploads/2017/10/28232301/sailor-moon.jpg",
    "https://static.zerochan.net/Sailor.Moon.(Character).full.2013493.jpg",
    "https://static.zerochan.net/Sailor.Moon.(Character).full.438313.jpg",
    "https://static.zerochan.net/Sailor.Moon.(Character).full.1688057.jpg"
];

export default async (message, args, client) => {
    message.delete();
    message.channel.send(new MessageAttachment(customfox(animes)));
}