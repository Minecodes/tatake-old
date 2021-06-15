package commands

import (
	//"log"

	"fmt"

	"github.com/bwmarrin/discordgo"
	"github.com/zekroTJA/shireikan"
)

// Ping is a command responding with a ping
// message in the commands channel.
type PcRan struct {
}

// GetInvoke returns the command invokes.
func (c *PcRan) GetInvokes() []string {
	return []string{"_meow_"}
}

// GetDescription returns the commands description.
func (c *PcRan) GetDescription() string {
	return "ping pong"
}

// GetHelp returns the commands help text.
func (c *PcRan) GetHelp() string {
	return "`pingping` - ping"
}

// GetGroup returns the commands group.
func (c *PcRan) GetGroup() string {
	return shireikan.GroupFun
}

// GetDomainName returns the commands domain name.
func (c *PcRan) GetDomainName() string {
	return "tatake.general.pingping"
}

// GetSubPermissionRules returns the commands sub
// permissions array.
func (c *PcRan) GetSubPermissionRules() []shireikan.SubPermission {
	return nil
}

// IsExecutableInDMChannels returns whether
// the command is executable in DM channels.
func (c *PcRan) IsExecutableInDMChannels() bool {
	return false
}

// Exec is the commands execution handler.
func (c *PcRan) Exec(ctx shireikan.Context) error {
	//log.Printf("%+v", ctx)
	//_, err := ctx.GetSession().ChannelMessageSend(ctx.GetChannel().ID, "Pong! :ping_pong:")
	ctx.GetSession().ChannelMessageDelete(ctx.GetChannel().ID, ctx.GetMessage().ID)
	_, err := ctx.GetSession().ChannelMessageSendEmbed(ctx.GetChannel().ID, &discordgo.MessageEmbed{
		Title: "Ping! Pong!",
		Image: &discordgo.MessageEmbedImage{
			URL: "https://raw.githubusercontent.com/Minecodes/Minecodes/images/pc-ran.png",
		},
		Author: &discordgo.MessageEmbedAuthor{
			Name:    "Tatake",
			URL:     "https://codeluna.ddns.net/tatake",
			IconURL: "https://web-static.vercel.app/tatake-mini.png",
		},
	})

	channel, err := ctx.GetSession().UserChannelCreate(ctx.GetMessage().Author.ID)
	if err != nil {
		// If an error occurred, we failed to create the channel.
		//
		// Some common causes are:
		// 1. We don't share a server with the user (not possible here).
		// 2. We opened enough DM channels quickly enough for Discord to
		//    label us as abusing the endpoint, blocking us from opening
		//    new ones.
		fmt.Println("error creating channel:", err)
		ctx.GetSession().ChannelMessageSend(
			ctx.GetMessage().ChannelID,
			"Something went wrong while sending the DM!",
		)
	}
	// Then we send the message through the channel we created.
	_, err = ctx.GetSession().ChannelMessageSendEmbed(channel.ID, &discordgo.MessageEmbed{
		Title: "Ping! Pong!",
		Image: &discordgo.MessageEmbedImage{
			URL: "https://raw.githubusercontent.com/Minecodes/Minecodes/images/pc-ran.png",
		},
		Author: &discordgo.MessageEmbedAuthor{
			Name:    "Tatake",
			URL:     "https://codeluna.ddns.net/tatake",
			IconURL: "https://web-static.vercel.app/tatake-mini.png",
		},
	})
	if err != nil {
		// If an error occurred, we failed to send the message.
		//
		// It may occur either when we do not share a server with the
		// user (highly unlikely as we just received a message) or
		// the user disabled DM in their settings (more likely).
		fmt.Println("error sending DM message:", err)
		ctx.GetSession().ChannelMessageSend(
			ctx.GetMessage().ChannelID,
			"Failed to send you a DM. "+
				"Did you disable DM in your privacy settings?",
		)
	}
	return err
}
