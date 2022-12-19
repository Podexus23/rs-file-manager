import { copyFile } from "../services/fs/copyFile.fs.js";
import { createFile } from "../services/fs/createFile.fs.js";
import { deleteFile } from "../services/fs/deleteFile.fs.js";
import { moveFile } from "../services/fs/moveFile.fs.js";
import { readFile } from "../services/fs/readfile.fs.js";
import { renameFile } from "../services/fs/renameFile.fs.js";
import { upCommand, showListOfFiles, changeDir } from "../services/navigation.service.js";


const mainController = ([cmd, arg1, arg2, ...rest]) => {
  
  //navigation
  if (cmd === 'up') {
    console.log('we are going up');
    upCommand();
  }
  if (cmd === "cd") {
    console.log('change directory, relative or absolute!');
    changeDir(arg1);
  }
  if (cmd === "ls") {
    console.log('Print in console list of all files and folders in current directory');
    showListOfFiles();
  }

  //files operations
  if (cmd === "cat") {
    console.log(`Read file and print it's content in console (should be done using Readable stream)`);
    readFile(arg1);
  }
  if(cmd === "add") {
    console.log('Create empty file in current working directory');
    createFile(arg1);
  }
  if(cmd === "rn") {
    console.log(`Rename file (content should remain unchanged)`);
    renameFile(arg1, arg2);
  }
  if(cmd === "cp") {
    console.log(`Copy file (should be done using Readable and Writable streams)`);
    copyFile(arg1, arg2);
  }
  if(cmd === "mv") {
    console.log(`Move file (same as copy but initial file is deleted, copying part should be done using Readable and Writable streams):`);
    moveFile(arg1, arg2);
  }
  if(cmd === "rm") {
    console.log(`Delete file`);
    deleteFile(arg1);
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