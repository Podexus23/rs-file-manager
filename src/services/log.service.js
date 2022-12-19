

const printError = (error) => {
  console.log('ERROR: ' + '' + error);
}

const printInputError = () => {
  console.log('Invalid input: command not found');
}

const printOperationError = (err) => {
  console.log('Operation failed: ' + err)
}

const leavingProgram = (username) => {
  console.log(`Thank you for using File Manager, ${username}, goodbye!`);
  process.exit(0);
}

export {printError, leavingProgram, printInputError, printOperationError}