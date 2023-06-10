#!/usr/bin/env node

import runGame from '../src/index.js';
import myGame from '../src/games/logic-calc.js';

runGame('What is the result of the expression?', myGame);
