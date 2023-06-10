#!/usr/bin/env node

import runGame from '../src/index.js';
import myGame from '../src/games/logic-even.js';

runGame('Answer "yes" if the number is even, otherwise answer "no".', myGame);
