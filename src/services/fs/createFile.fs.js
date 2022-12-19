import { createWriteStream } from 'fs';
import { createPath } from '../../helpers/path.helper.js';
import { printOperationError } from '../log.service.js';

const createFile = (filename) => {
  const newFile = createWriteStream(createPath(filename));
  newFile.on('error', (err) => printOperationError(err.message));
  newFile.on('finish', () => console.log(`File "${filename} has been created"`));
  newFile.close();
}

export {createFile}