#!/usr/bin/env node

import runGame from '../src/index.js';
import startTheEvenGame from '../src/games/logic-even.js';

runGame('Answer "yes" if the number is even, otherwise answer "no".', startTheEvenGame);
