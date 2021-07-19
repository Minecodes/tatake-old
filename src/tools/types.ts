import { EmbedFieldData } from "discord.js";

interface Config {
    token: string,
    prefix: String
}

interface EmbedAuthor {
    name: String,
    pictureURL?: string,
    URL?: string
}

interface EmbedFooter {
    text: string,
    photoURL?: string
}

interface EmbedAdditionalOptions {
    fields?: EmbedFieldData[]
    footer?: EmbedFooter,
    image?: string,
    thumbnail?: string,
    timestamp?: number | Date
}

export { Config, EmbedAuthor, EmbedAdditionalOptions }