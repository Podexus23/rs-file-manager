import { getUserName } from "./storage.service.js";


const printError = (error) => {
  console.log(' ERROR: ' + '' + error);
}

const leavingProgram = () => {
  console.log(`Thank you for using File Manager, ${getUserName()}, goodbye!`);
  process.exit(0);
}

export {printError, leavingProgram}