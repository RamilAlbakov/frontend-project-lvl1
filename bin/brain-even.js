#!/usr/bin/node

import { evenGame, greeting } from '../src/even.js';

console.log('Welcome to the Brain Games!');
const name = greeting();
evenGame(name);
