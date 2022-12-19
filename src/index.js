import {argv, stdin, stdout} from 'process';
import readline from 'readline/promises';

import { getNameFromArg,  } from './helpers/args.helper.js';
import { getHomePath, getUserName, setUserName} from './services/storage.service.js';
import { leavingProgram, printError } from './services/log.service.js';
import { mainController } from './helpers/operations.helper.js';
import { inputInterpreter } from './helpers/interpretator.helper.js';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const commands = ['up', 'cd', 'ls', 'cat', 'add', 'rn', 'cp', 'mv', 'rm', 'os', 'hash', 'compress', 'decompress'];

const main = async() => {
  const args = argv.slice(2);
  const user = getNameFromArg(args[0]);

  if(user) setUserName(user);
  else return;

  console.log(`Welcome to the File Manager, ${getUserName()}!' 
You are currently in ${getHomePath()}`.trim());

  rl.on('line', (input) => {
    const trimmedStr = input.trim()
    const checkedLine = inputInterpreter(trimmedStr);
    // console.log(`Line: "${input}"`);
    // console.log(`Trimmed: "${trimmedStr}"`);
    console.log(checkedLine)
    if(trimmedStr === '.exit') leavingProgram();
    try{
      if(commands.includes(checkedLine[0])) mainController(checkedLine);
    } catch(e){
      printError(e.message)
    }
    

    console.log(`You are currently in ${getHomePath()}`.trim())
  })

  rl.on('SIGINT', leavingProgram);

}


await main();