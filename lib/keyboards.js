const { Markup } = require('telegraf');

const keyboards = {
  start: [
    [Markup.button.callback('Create New Game Here', 'createNewGame')],
    [Markup.button.url('Invite Friends to Play', 'https://google.com')],
    [Markup.button.callback('Help', 'help')],
  ],
};

module.exports = { keyboards };
