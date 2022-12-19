import path from 'path';
import fs from 'fs/promises';
import { chdir, cwd } from 'process';
import { printOperationError } from './log.service.js';

const upCommand = () => {
  chdir(path.dirname(cwd()))
}

const showListOfFiles = async () => {
  const dirPath = cwd();
  const directory = await fs.readdir(dirPath, {withFileTypes: true});
  const sortedDir = directory.map((elem) => {
    if(elem.isFile()) return {name:elem.name, type:'file'}
    if(elem.isDirectory()) return {name:elem.name, type:'directory'}
    else return {name: elem.name, type: 'special'}
  });

  console.table(sortedDir.sort((a, b) => {
    if(a.type === b.type) return 0;
    if(a.type === 'directory') return -1;
    if(a.type === 'special') return 1;
    if(a.type === 'file' && b.type === 'directory') return 1;
    else return -1;
  }));
}

const changeDir = (newDir) => {
  try{
    chdir(newDir);
  } catch(e) {
    printOperationError('wrong path');
  }
}

export {upCommand, showListOfFiles, changeDir}