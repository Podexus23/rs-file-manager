import {argv, stdin, stdout} from 'process';
import readline from 'readline/promises';

import { getNameFromArg,  } from './helpers/args.helper.js';
import { getHomePath, getUserName, setUserName, USER_DATA} from './services/storage.service.js';
import { leavingProgram } from './services/log.service.js';
import { mainController } from './helpers/operations.helper.js';
import { inputInterpreter } from './helpers/interpretator.helper.js';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const commands = ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress'];

const main = async() => {
  const args = process.argv.slice(2);
  const user = getNameFromArg(args[0]);

  if(user) setUserName(user);
  else return;
  console.log(`Welcome to the File Manager, ${getUserName()}!
  You are currently in ${getHomePath()}`.trim());

  process.on('SIGINT', leavingProgram);

  rl.on('line', (input) => {
    const trimmedStr = input.trim()
    // console.log(`Line: "${input}"`);
    // console.log(`Trimmed: "${trimmedStr}"`);
    const checkedLine = inputInterpreter(trimmedStr);
    console.log(checkedLine)
  })
}


await main();