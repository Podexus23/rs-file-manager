import path from 'path';
import fs from 'fs/promises';
import { getHomePath, setHomePath } from './storage.service.js';

const upCommand = () => {
  setHomePath(path.dirname(getHomePath()))
}

const changeDir = (newPath) => {
  const isPath = join(newPath);
  console.log(isPath)
  if(isPath.isAbsolute()){
    setHomePath(newPath);
  } else {
    console.log(newPath)
  }
}

const showListOfFiles = async () => {
  const dirPath = getHomePath();
  const directory = await fs.readdir(dirPath, {withFileTypes: true});
  const sortedDir = directory.map((elem) => {
    if(elem.isFile()) return {name:elem.name, type:'file'}
    if(elem.isDirectory()) return {name:elem.name, type:'directory'}
    else return {name: elem.name, type: 'special'}
  });
  console.table(sortedDir);
}

export {upCommand, changeDir, showListOfFiles}