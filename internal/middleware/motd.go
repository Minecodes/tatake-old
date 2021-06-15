package middleware

import "github.com/zekroTJA/shireikan"

type MOTD struct {
}

// Handle is the Middlewares handler.
func (m *MOTD) Handle(cmd shireikan.Command, ctx shireikan.Context, layer shireikan.MiddlewareLayer) (bool, error) {
	ctx.SetObject("motds", []string{
		"Hello World, hello privacy, hello computer, hello everyone 😀",
		"another anime everyday ❤",
		"**NARUTO!!!**",
		"Best birthday: friday 13 😁",
		"Salve",
		"こんにちは",
		"Don't get Meowified with `Meowified.exe` XDD",
		"We are most beautiful when we don't want to please anyone.",
		"Am schönsten sind wir, wenn wir niemandem gefallen wollen.",
		"Never pretend to be someone else, just be yourself.",
		"Täusche niemals vor jemand anderes zu sein, sei einfach du selbst.",
		"他人のふりをするのではなく、自分自身になりましょう。",
	})

	return true, nil
}

// GetLayer returns the execution layer.
func (m *MOTD) GetLayer() shireikan.MiddlewareLayer {
	return shireikan.LayerBeforeCommand
}
