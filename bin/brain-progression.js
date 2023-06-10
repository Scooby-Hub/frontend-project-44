#!/usr/bin/env node

import runGame from '../src/index.js';
import myGame from '../src/games/logic-progression.js';

runGame('What number is missing in the progression?', myGame);
