require("dotenv").config();

import {
	Client,
	GatewayIntentBits,
	SlashCommandBuilder,
	Events,
	ChatInputCommandInteraction,
} from "discord.js";
const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
	],
});
const botToken = process.env.DISCORD_TOKEN;

client.once(Events.ClientReady, (c) => {
	console.log(`Logged in as ${client.user?.tag}!`);

	const penis = new SlashCommandBuilder()
		.setName("penis")
		.setDescription("sim, penis.");

	client.application?.commands.create(penis);
});

client.on(Events.InteractionCreate, (_interaction) => {
	const interaction = _interaction as ChatInputCommandInteraction;
	interaction.reply("penissssss");
});

client.login(botToken);
