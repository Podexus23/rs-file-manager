import { EOL, arch, cpus, homedir, userInfo } from 'os';
import { printInputError, printOperationError } from './log.service.js';

const osInfo = (option) => {
  try {
  if(option === '--EOL') {
    console.log(`default system End-Of-Line: ${JSON.stringify(EOL)}`);
    return;
  };
  if(option === '--cpus'){
    const cpusData = cpus().map((e) => {
      const model = e.model.trim();
      const rate = `${(e.speed / 1000).toFixed(2)} GHz`;
      return {model, rate};
    });
    console.table(cpusData);
    return;
  };
  if(option === '--homedir'){
    console.log(`home directory: ${homedir()}`)
    return;
  };
  if(option === '--username'){
    console.log(`system user name: ${userInfo().username}`)
    return;
  };
  if(option === '--architecture'){
    console.log(`CPU architecture: ${arch()}`) 
    return;
  };
  printInputError();
  } catch (err) {
    printOperationError(err.message);
  }
}

export {osInfo}