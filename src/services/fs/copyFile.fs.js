import { createWriteStream, createReadStream } from 'fs';
import { printOperationError } from '../log.service.js';
import { basename, join } from 'path';

const copyFile = async (pathToFile, newDirectory) => {
  const filename = basename(pathToFile);
  const newPath = join(newDirectory, filename);

  const readStream = createReadStream(pathToFile);
  const writeStream = createWriteStream(newPath);
  const pipeMachine = readStream.pipe(writeStream);


  readStream.on('error', (err) => printOperationError(err.message));
  writeStream.on('error', (err) => printOperationError(err.message));
  pipeMachine.on('error', (err) => printOperationError(err.message));

  pipeMachine.on('finish', () => console.log('File has been copied'));

}

export {copyFile}