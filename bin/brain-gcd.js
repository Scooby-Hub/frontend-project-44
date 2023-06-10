#!/usr/bin/env node

import runGame from '../src/index.js';
import myGame from '../src/games/logic-gcd.js';

runGame('Find the greatest common divisor of given numbers.', myGame);
