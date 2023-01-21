const { bot } = require('../core/bot');

bot.action('newGame', (ctx) => {
  ctx.answerCbQuery();
  ctx.replyWithGame('wordGame');
});
