package commands

import (
	"fmt"
	"math/rand"

	"github.com/zekroTJA/shireikan"
)

// Object is a command returning an object
// recovered from the context's object map.
type MOTD struct {
}

// GetInvoke returns the command invokes.
func (c *MOTD) GetInvokes() []string {
	return []string{"motd", "messageoftheday"}
}

// GetDescription returns the commands description.
func (c *MOTD) GetDescription() string {
	return "get the MOTD (message of the day)"
}

// GetHelp returns the commands help text.
func (c *MOTD) GetHelp() string {
	return "motd"
}

// GetGroup returns the commands group.
func (c *MOTD) GetGroup() string {
	return shireikan.GroupEtc
}

// GetDomainName returns the commands domain name.
func (c *MOTD) GetDomainName() string {
	return "tatake.etc.motd"
}

// GetSubPermissionRules returns the commands sub
// permissions array.
func (c *MOTD) GetSubPermissionRules() []shireikan.SubPermission {
	return nil
}

// IsExecutableInDMChannels returns whether
// the command is executable in DM channels.
func (c *MOTD) IsExecutableInDMChannels() bool {
	return true
}

// Exec is the commands execution handler.
func (c *MOTD) Exec(ctx shireikan.Context) error {
	obj, _ := ctx.GetObject("motds").([]string)
	_, err := ctx.GetSession().ChannelMessageSend(ctx.GetChannel().ID,
		fmt.Sprintf(obj[rand.Intn(len(obj))]))
	return err
}
