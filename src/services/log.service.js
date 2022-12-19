

const printError = (error) => {
  console.log(' ERROR: ' + '' + error);
}

const loginError = () => {
  console.log(' ERROR: ' + '' + error);
}

const leavingProgram = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
}

export {printError, leavingProgram, loginError}