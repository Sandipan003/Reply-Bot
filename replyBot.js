const { Client, GatewayIntentBits, ActivityType } = require("discord.js");
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent,] });


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
  client.user.setStatus('online');
  client.user.setActivity(process.env.ACTIVITY_NAME, { type: ActivityType.Watching })
});

client.on('messageCreate', message => {
  // Ignore messages from bots
  if (message.author.bot) return;

  // Convert the message content to lowercase
  const content = message.content.toLowerCase();

  // Check for specific keywords and reply accordingly
  if (message.content=='Hello') {
    message.reply('Hello there!');
  } else if (message.content=='how are you') {
    message.reply('I am a bot, but thanks for asking!.');
  }
  else if (message.content=='good morning') {
    message.reply('Good Morning, I hope that you have a great day.');
  } 
  else if (message.content=='good night') {
    message.reply('Good Night Sweet Dreams Take Care.');
  }
  else if (message.content=='hi') {
    message.reply('Hello there!.');
  }
  else if (message.content=='who are you') {
    message.reply('I am a Discord messaging bot.');
  }
  else if (message.content=='gm') {
    message.reply('Good Morning, I hope that you have a great day.');
  }
  else if (message.content=='gn') {
    message.reply('Good Night Sweet Dreams Take Care.');
  }
  else if (message.content=='goodbye') {
    message.reply('Goodbye!,Take Care');
  }
  else if (message.content=='favorite color') {
    message.reply('My favorite color is RED !');
  }
  else if (content.includes('your age')) {
    message.reply('I am ageless, for I am but a bot!');
  }
  else if (content.includes('<@737489610518560867>')) {
    message.reply('He is busy right now.');
  }
  else if (content.includes('<@1192006144462438412>')) {
    message.reply('He is busy right now.');
  }

});

client.login(process.env.DISCORD_BOT_TOKEN)