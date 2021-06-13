package commands

import (
	//"log"

	"github.com/bwmarrin/discordgo"
	"github.com/zekroTJA/shireikan"
)

// Ping is a command responding with a ping
// message in the commands channel.
type Avatar struct {
}

// GetInvoke returns the command invokes.
func (c *Avatar) GetInvokes() []string {
	return []string{"avatar", "tuesday"}
}

// GetDescription returns the commands description.
func (c *Avatar) GetDescription() string {
	return "Avatar pong"
}

// GetHelp returns the commands help text.
func (c *Avatar) GetHelp() string {
	return "`avatar` - Avatar"
}

// GetGroup returns the commands group.
func (c *Avatar) GetGroup() string {
	return shireikan.GroupEtc
}

// GetDomainName returns the commands domain name.
func (c *Avatar) GetDomainName() string {
	return "tatake.etc.avatar"
}

// GetSubPermissionRules returns the commands sub
// permissions array.
func (c *Avatar) GetSubPermissionRules() []shireikan.SubPermission {
	return nil
}

// IsExecutableInDMChannels returns whether
// the command is executable in DM channels.
func (c *Avatar) IsExecutableInDMChannels() bool {
	return true
}

// Exec is the commands execution handler.
func (c *Avatar) Exec(ctx shireikan.Context) error {
	//log.Printf("%+v", ctx)
	//_, err := ctx.GetSession().ChannelMessageSend(ctx.GetChannel().ID, "Pong! :ping_pong:")
	_, err := ctx.GetSession().ChannelMessageSendEmbed(ctx.GetChannel().ID, &discordgo.MessageEmbed{
		Title: "Avatar",
		Image: &discordgo.MessageEmbedImage{
			URL: ctx.GetMessage().Author.AvatarURL(ctx.GetMessage().Author.Token),
		},
		Author: &discordgo.MessageEmbedAuthor{
			Name:    "Tatake",
			URL:     "https://codeluna.ddns.net/tatake",
			IconURL: "https://web-static.vercel.app/tatake-mini.png",
		},
	})
	return err
}
