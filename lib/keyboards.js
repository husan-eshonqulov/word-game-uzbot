const keyboards = {
  start: [
    [{ text: 'Create New Game Here', callback_data: 'newGame' }],
    [{ text: 'Invite Friends to Play', url: 'https://google.com' }],
    [{ text: 'Help', callback_data: 'help' }],
  ],
};

module.exports = { keyboards };
