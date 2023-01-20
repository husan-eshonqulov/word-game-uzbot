const { bot } = require('../core/bot');
const { messages } = require('../lib/messages');

bot.help((ctx) => {
  ctx.replyWithMarkdownV2(messages['help']);
});
