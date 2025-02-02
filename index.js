require("dotenv").config();

const {Client, GatewayIntentBits} = require("discord.js");
const client = new Client({
	intents: [GatewayIntentBits.All],
});

client.login(process.env.DISCORD_TOKEN);

client.on("message", (message) => {
	if (message.author.bot) return;
	if (message.content == "!penis") {
		message.channel.send("amo penis");
	}
});

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
});
