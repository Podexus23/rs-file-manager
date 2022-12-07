import {argv} from 'process';

const checkUserName = () => {
  let name = argv.slice(2)[0];
  if(name.includes('--username=')) return name.replace('--username=', '');
  else return 'Guest';
}

const mainManager = async() => {
  const USER = checkUserName();
  console.log(`Welcome to the File Manager, ${USER}!`);
}

await mainManager();