#!/usr/bin/env node

import runGame from '../src/index.js';
import startTheGcdGame from '../src/games/logic-gcd.js';

runGame('Find the greatest common divisor of given numbers.', startTheGcdGame);
