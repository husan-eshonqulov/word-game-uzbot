const { Telegraf } = require('telegraf');

const { token } = require('../config');

const bot = new Telegraf(token);

bot.launch();

module.exports = { bot };
