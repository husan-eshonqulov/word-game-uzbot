const { bot } = require('../core/bot');
const { messages } = require('../lib/messages');

bot.action('help', (ctx) => {
  ctx.answerCbQuery();
  ctx.replyWithMarkdownV2(messages['help']);
});
