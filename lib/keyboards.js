const keyboards = {
  start: [
    [{ text: 'Create New Game Here', callback_data: 'newGame' }],
    [
      {
        text: 'Invite Friends to Play',
        switch_inline_query: '',
      },
    ],
    [{ text: 'Help', callback_data: 'help' }],
  ],
  newGame: [
    [{ text: 'Enter The Game', callback_game: 'wordGame' }],
    [{ text: 'Call WordGameUzbot', url: 'https://t.me/WordGameUzbot' }],
  ],
};

module.exports = { keyboards };
