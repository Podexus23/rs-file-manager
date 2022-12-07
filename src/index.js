import {argv, stdin, stdout} from 'process';

const checkUserName = () => {
  let name = argv.slice(2)[0];
  if(name.includes('--username=')) return name.replace('--username=', '');
  else return 'Guest';
}

const leavingProgram = () => {
  console.log('Thank you for using File Manager, Username, goodbye!');
  process.exit();
}

const mainManager = async() => {
  const USER = checkUserName();
  console.log(`Welcome to the File Manager, ${USER}!`);

  stdin.on('data', (data)=> {
    const chunkOfData = data.toString('utf-8').trim();
    console.log(`Data came from terminal: ${data}`);
    if(chunkOfData === '.exit') leavingProgram();
  })

  process.on('SIGINT', leavingProgram);

}


await mainManager();