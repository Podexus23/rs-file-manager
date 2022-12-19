import { copyFile } from './copyFile.fs.js';
import { rm } from 'fs/promises';
import { printOperationError } from '../log.service.js';
import { createPath } from '../../helpers/path.helper.js';

const moveFile = async (pathToFile, newDirectory) => {
  try {
    await copyFile(pathToFile, newDirectory);
    const result = await rm(createPath(pathToFile));
    if(result === undefined) console.log('File has been moved');
  } catch(err) {
    printOperationError(err.message);
  }
}

export { moveFile };
