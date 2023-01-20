const path = require('path');

const { bot } = require('../core/bot');

bot.start((ctx) => {
  ctx.replyWithPhoto(
    { source: path.join(__dirname, '..', 'public', 'assets', 'logo.png') },
    {
      caption:
        'Hi, I am *WordGameUzbot*. \nYou can play *Word Game* with your friends right here using Telegram platform.',
      parse_mode: 'Markdown',
    }
  );
});
