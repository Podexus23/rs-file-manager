import path from 'path';
import fs from 'fs/promises';
import { chdir } from 'process';

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
  console.table(sortedDir);
}

export {upCommand, showListOfFiles}