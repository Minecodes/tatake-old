package commands

import (
	//"log"

	"github.com/bwmarrin/discordgo"
	"github.com/zekroTJA/shireikan"
)

// Ping is a command responding with a ping
// message in the commands channel.
type Serverinfo struct {
}

// GetInvoke returns the command invokes.
func (c *Serverinfo) GetInvokes() []string {
	return []string{"serverinfo", "si", "sinfo"}
}

// GetDescription returns the commands description.
func (c *Serverinfo) GetDescription() string {
	return "get the serverinfos"
}

// GetHelp returns the commands help text.
func (c *Serverinfo) GetHelp() string {
	return "`serverinfo` - get the serverinfos"
}

// GetGroup returns the commands group.
func (c *Serverinfo) GetGroup() string {
	return shireikan.GroupGeneral
}

// GetDomainName returns the commands domain name.
func (c *Serverinfo) GetDomainName() string {
	return "tatake.general.serverinfo"
}

// GetSubPermissionRules returns the commands sub
// permissions array.
func (c *Serverinfo) GetSubPermissionRules() []shireikan.SubPermission {
	return nil
}

// IsExecutableInDMChannels returns whether
// the command is executable in DM channels.
func (c *Serverinfo) IsExecutableInDMChannels() bool {
	return false
}

// Exec is the commands execution handler.
func (c *Serverinfo) Exec(ctx shireikan.Context) error {
	//log.Printf("%+v", ctx)
	//_, err := ctx.GetSession().ChannelMessageSend(ctx.GetChannel().ID, "Pong! :ping_pong:")
	_, err := ctx.GetSession().ChannelMessageSendEmbed(ctx.GetChannel().ID, &discordgo.MessageEmbed{
		Title: "Serverinfo",
		Author: &discordgo.MessageEmbedAuthor{
			Name:    "Tatake",
			URL:     "https://codeluna.ddns.net/tatake",
			IconURL: "https://web-static.vercel.app/tatake-mini.png",
		},
		Fields: []*discordgo.MessageEmbedField{
			{
				Name:   "Name",
				Value:  ctx.GetGuild().Name,
				Inline: true,
			},
			{
				Name:   "ID",
				Value:  ctx.GetGuild().ID,
				Inline: true,
			},
			{
				Name:   "Region",
				Value:  ctx.GetGuild().Region,
				Inline: true,
			},
			{
				Name:   "OwnerID",
				Value:  ctx.GetGuild().OwnerID,
				Inline: true,
			},
			{
				Name:   "IconURL",
				Value:  ctx.GetGuild().IconURL(),
				Inline: true,
			},
		},
	})
	return err
}
