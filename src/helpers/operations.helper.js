import { upCommand } from "../services/navigation.service.js";


const mainController = (cmd) => {
  
  //navigation
  if (cmd === 'up') {
    console.log('we a going up');
    upCommand();
  }
  if(cmd === "cd") {
    console.log('change directory, relative or absolute!');
  }
  if(cmd === "ls") {
    console.log('Print in console list of all files and folders in current directory');
  }
  //files operations
  if(cmd === "cat") {
    console.log(`Read file and print it's content in console (should be done using Readable stream):`);
  }
  if(cmd === "add") {
    console.log('Create empty file in current working directory:');
  }
  if(cmd === "rn") {
    console.log(`Rename file (content should remain unchanged): rn path_to_file new_filename`);
  }
  if(cmd === "cp") {
    console.log(`Copy file (should be done using Readable and Writable streams):
    cp path_to_file path_to_new_directory`);
  }
  if(cmd === "mv") {
    console.log(`Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):
    mv path_to_file path_to_new_directory`);
  }
  if(cmd === "rm") {
    console.log(`Delete file:
    rm path_to_file`);
  }
  //OS INFO
  if(cmd === "os"){
    console.log(`Operating system info (prints following information in console)
    Get EOL (default system End-Of-Line) and print it to console
    os --EOL
    Get host machine CPUs info (overall amount of CPUS plus model and clock rate (in GHz) for each of them) and print it to console
    os --cpus
    Get home directory and print it to console
    os --homedir
    Get current system user name (Do not confuse with the username that is set when the application starts) and print it to console
    os --username
    Get CPU architecture for which Node.js binary has compiled and print it to console
    os --architecture`)
  }
  if(cmd === 'hash'){
    console.log('hash')
  }
  if(cmd === 'compress'){
    console.log('compress')
  }
  if(cmd === 'decompress'){
    console.log('decompress')
  }
}

export { mainController }