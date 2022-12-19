import {rename} from 'fs/promises';
import { dirname, join } from 'path';
import { printOperationError } from '../log.service.js';

const renameFile = async (pathToFile, fileName) => {
  try{
    const directory = dirname(pathToFile);
    const newName = join(directory, fileName);
    await rename(pathToFile, newName);
    console.log('File renamed');
  } catch (err) {
    printOperationError(err.message);
  }
}

export { renameFile }