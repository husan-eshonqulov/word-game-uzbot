const { bot } = require('../core/bot');
const { messages } = require('../lib/messages');
const { keyboards } = require('../lib/keyboards');

bot.start((ctx) => {
  ctx.replyWithPhoto(
    // { source: path.join(__dirname, '..', 'public', 'assets', 'logo.png') },
    'AgACAgIAAxkBAAOFY8uTTeuok-v0Tfy3Y6gj1plcJCgAAmPGMRsTDFlKaFF0bgduXIQBAAMCAANzAAMtBA',
    {
      caption: messages['start'],
      parse_mode: 'MarkdownV2',
      reply_markup: {
        inline_keyboard: keyboards['start'],
      },
    }
  );
});
