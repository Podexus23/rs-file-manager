import { rm } from 'fs/promises';
import { printOperationError } from '../log.service.js';
import { createPath } from '../../helpers/path.helper.js';

const deleteFile = async (pathToFile) => {
  try {
    const result = await rm(createPath(pathToFile));
    if(result === undefined) console.log('File has been deleted');
  } catch(err) {
    printOperationError(err.message);
  }
}

export { deleteFile };