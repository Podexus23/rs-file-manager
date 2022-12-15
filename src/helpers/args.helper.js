import { printError } from "../services/log.service.js";

const getNameFromArg = (arg) => {
  const loginPrefix = arg.slice(0,11);
  const name = arg.slice(11);

  if(loginPrefix !== '--username=') {
    printError('Wrong prefix, please, follow this example: --username=[your_name]');
    return false;
  } 

  if(!name.length) {
    printError('Wrong username, please, try again');
    return false;
  }

  return name;
}

export { getNameFromArg }