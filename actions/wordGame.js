const { bot } = require('../core/bot');

bot.action('wordGame', (ctx) => {
  ctx.answerCbQuery('Starting..', { url: 'https://google.com' });
});
