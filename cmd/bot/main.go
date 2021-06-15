package main

import (
	"fmt"
	"log"
	"os"
	"os/signal"
	"syscall"

	"codeluna.ddns.net/tatake/internal/commands"
	"codeluna.ddns.net/tatake/internal/config"
	"codeluna.ddns.net/tatake/internal/middleware"
	"github.com/bwmarrin/discordgo"
	"github.com/zekroTJA/shireikan"
)

func main() {
	fmt.Println("Bot Invite: https://codeluna.page.link/tatake")
	cfg, err := config.ParsConfigFromJSONFile("./config/config.json")
	if err != nil {
		panic(err)
	}

	session, err := discordgo.New("Bot " + cfg.Token)
	if err != nil {
		panic(err)
	}

	fmt.Println("Starting bot... Press CRLT-C to stop")
	err = session.Open()
	if err != nil {
		panic(err)
	}

	defer func() {
		sc := make(chan os.Signal, 1)
		signal.Notify(sc, syscall.SIGINT, syscall.SIGTERM, os.Interrupt, os.Kill)
		<-sc
		fmt.Println("Stopping bot...")
		session.Close()
		fmt.Println("Bot stopped...")
	}()

	handler := shireikan.New(&shireikan.Config{
		GeneralPrefix:         "::",
		DeleteMessageAfter:    false,
		AllowBots:             false,
		AllowDM:               true,
		ExecuteOnEdit:         true,
		InvokeToLower:         true,
		UseDefaultHelpCommand: true,
		OnError: func(ctx shireikan.Context, typ shireikan.ErrorType, err error) {
			ctx.GetSession().ChannelMessageSend(ctx.GetChannel().ID, "Command not found <@"+ctx.GetMessage().Author.ID+">")
			log.Printf("[ERR] [%d] %s", typ, err.Error())
		},
	})

	shireikan.EmbedColorDefault = 0xffffff
	shireikan.EmbedColorError = 0xff0000

	handler.Register(&middleware.Test{})
	handler.Register(&middleware.MOTD{})

	handler.Register(&commands.Ping{})
	handler.Register(&commands.Anime{})
	handler.Register(&commands.Image{})
	handler.Register(&commands.MOTD{})
	handler.Register(&commands.Avatar{})
	handler.Register(&commands.Serverinfo{})
	handler.Register(&commands.PcRan{})

	handler.Setup(session)
}
