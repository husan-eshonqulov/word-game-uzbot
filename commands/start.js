const path = require('path');

const { bot } = require('../core/bot');
const { messages } = require('../lib/messages');

bot.start((ctx) => {
  ctx.replyWithPhoto(
    { source: path.join(__dirname, '..', 'public', 'assets', 'logo.png') },
    {
      caption: messages['start'],
      parse_mode: 'MarkdownV2',
    }
  );
});
