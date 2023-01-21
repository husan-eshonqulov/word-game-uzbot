const { bot } = require('../core/bot');

bot.on('inline_query', (ctx) => {
  ctx.answerInlineQuery([
    {
      type: 'game',
      id: '1',
      game_short_name: 'wordGame',
    },
  ]);
});
