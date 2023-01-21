const { bot } = require('../core/bot');
const { keyboards } = require('../lib/keyboards');

bot.action('newGame', (ctx) => {
  ctx.answerCbQuery();
  ctx.replyWithGame('wordGame', {
    reply_markup: {
      inline_keyboard: keyboards['newGame'],
    },
  });
});
