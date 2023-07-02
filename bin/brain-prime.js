#!/usr/bin/env node

import runGame from '../src/index.js';
import startThePrimeGame from '../src/games/logic-prime.js';

runGame('Answer "yes" if given number is prime. Otherwise answer "no".', startThePrimeGame);
