require("dotenv").config();

import {Client, GatewayIntentBits} from "discord.js";
const client = new Client({
    intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent],
});

client.login(process.env.DISCORD_TOKEN);

client.on("messageCreate", (message) => {
    console.log("mensagem")
    if (message.author.bot) return;
    if (message.content == "!penis") {
        message.channel.send("amo penis");
    }
});

client.on("ready", () => {
    console.log(`Logged in as ${client.user?.tag}!`);
});
