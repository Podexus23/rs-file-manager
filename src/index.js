import {argv, chdir, cwd, env, stdin, stdout} from 'process';
import { EOL, homedir } from 'os';
import readline from 'readline/promises';

import { getNameFromArg } from './helpers/args.helper.js';
import { leavingProgram, printError } from './services/log.service.js';
import { mainController } from './helpers/operations.helper.js';
import { inputInterpreter } from './helpers/interpretator.helper.js';

const rl = readline.createInterface({
  input: stdin,
  output: stdout,
})

const userStartData = {
  name: "John Doe",
  path: homedir(),
}

const commands = ['up', 'cd', 'ls', 'cat', 'add',
 'rn', 'cp', 'mv', 'rm', 'os',
  'hash', 'compress', 'decompress'];

const main = async() => {
  chdir(homedir());
  const args = argv.slice(2);
  const user = getNameFromArg(args[0]);
  (!user) ? process.exit(0): userStartData.name = user;

  console.log(
  `Welcome to the File Manager, ${userStartData.name}!` 
  + EOL + `You are currently in ${cwd()}`.trim()
  );



  rl.on('line', (input) => {
    const trimmedStr = input.trim();
    const checkedLine = inputInterpreter(trimmedStr);
    //!remove
    console.log("old funk: ", checkedLine);

    if(trimmedStr === '.exit') leavingProgram(userStartData.name);
    try{
      if(commands.includes(checkedLine[0])) mainController(checkedLine);
    } catch(e){
      printError(e.message)
    }
    

    console.log(`You are currently in ${cwd()}`.trim())
  })

  rl.on('SIGINT', () => {leavingProgram(userStartData.name)});

}


await main();