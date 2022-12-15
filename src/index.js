import {argv, stdin, stdout} from 'process';
import { getNameFromArg } from './helpers/args.helper.js';
import { getHomePath, getUserName, setUserName, USER_DATA} from './services/storage.service.js';



const main = async() => {
  const args = process.argv.slice(2);
  const user = getNameFromArg(args[0]);

  if(user) setUserName(user);
  else return;
  console.log(`Welcome to the File Manager, ${getUserName()}!`.trim())

  process.on('SIGINT', leavingProgram);

  stdin.on('data', (data)=> {
    const chunkOfData = data.toString('utf-8').trim();
    console.log(`Data came from terminal: ${data}`);
    if(chunkOfData === '.exit') leavingProgram();
  })
  

}


await main();