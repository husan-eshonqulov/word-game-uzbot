const { bot } = require('../core/bot');
const { keyboards } = require('../lib/keyboards');

bot.on('inline_query', (ctx) => {
  ctx.answerInlineQuery([
    {
      type: 'game',
      id: '1',
      game_short_name: 'wordGame',
      reply_markup: {
        inline_keyboard: keyboards['newGame'],
      },
    },
  ]);
});
