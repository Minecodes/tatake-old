package commands

import (
	//"log"
	"math/rand"

	"github.com/bwmarrin/discordgo"
	"github.com/zekroTJA/shireikan"
)

// Ping is a command responding with a ping
// message in the commands channel.
type Image struct {
}

// GetInvoke returns the command invokes.
func (c *Image) GetInvokes() []string {
	return []string{"image", "i", "gi"}
}

// GetDescription returns the commands description.
func (c *Image) GetDescription() string {
	return "Sends an random image back"
}

// GetHelp returns the commands help text.
func (c *Image) GetHelp() string {
	return "`image` - Sends an random image back"
}

// GetGroup returns the commands group.
func (c *Image) GetGroup() string {
	return shireikan.GroupFun
}

// GetDomainName returns the commands domain name.
func (c *Image) GetDomainName() string {
	return "tatake.general.image"
}

// GetSubPermissionRules returns the commands sub
// permissions array.
func (c *Image) GetSubPermissionRules() []shireikan.SubPermission {
	return nil
}

// IsExecutableInDMChannels returns whether
// the command is executable in DM channels.
func (c *Image) IsExecutableInDMChannels() bool {
	return true
}

// Exec is the commands execution handler.
func (c *Image) Exec(ctx shireikan.Context) error {
	images := []string{
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
		"https://static.zerochan.net/Sailor.Moon.(Character).full.1688057.jpg",
		"https://i1.ytimg.com/vi/7OIXMmgfruw/maxresdefault.jpg",
		"https://wallup.net/wp-content/uploads/2016/01/250-anime-anime_girls-brunette-blushing-Tonari_no_Kaibutsu.jpg",
		"https://wallup.net/wp-content/uploads/2016/03/12/295322-anime_girls-Hatsune_Miku-Vocaloid-Kara_no_Kyoukai-crossover-twintails-aqua_hair-blue_eyes-long_hair.jpg",
		"https://anhdepblog.com/wp-content/uploads/2020/10/ngam-bo-hinh-anh-anime-dep-va-sieu-de-thuong-9.jpg",
		"https://wallup.net/wp-content/uploads/2016/07/23/70709-anime_girls-balloons-748x1023.jpg",
		"https://wallup.net/wp-content/uploads/2019/10/341323-touhou-dress-redheads-red-eyes-hakurei-reimu-smiling-lying-down-anime-girls-butterflies-748x1148.jpg",
		"https://wallup.net/wp-content/uploads/2016/07/23/81167-Kamio_Misuzu-Air_anime-748x421.png",
		"https://wallup.net/wp-content/uploads/2015/12/85207-anime-Touhou-Halloween-Kirisame_Marisa-blonde-pumpkin-anime_girls-witch-stars-moon-stockings-night-748x468.jpg",
		"https://wallup.net/wp-content/uploads/2018/09/26/227907-anime-Hyperdimension_Neptunia-748x554.jpg",
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
		"https://cdn.pixabay.com/photo/2020/08/17/18/38/cat-5496162_960_720.jpg",
	}
	//log.Printf("%+v", ctx)
	//_, err := ctx.GetSession().ChannelMessageSend(ctx.GetChannel().ID, "Pong! :ping_pong:")
	_, err := ctx.GetSession().ChannelMessageSendEmbed(ctx.GetChannel().ID, &discordgo.MessageEmbed{
		Title: "Image",
		Image: &discordgo.MessageEmbedImage{
			URL: images[rand.Intn(len(images))],
		},
		Author: &discordgo.MessageEmbedAuthor{
			Name:    "Tatake",
			URL:     "https://codeluna.ddns.net/tatake",
			IconURL: "https://web-static.vercel.app/tatake-mini.png",
		},
	})
	return err
}
