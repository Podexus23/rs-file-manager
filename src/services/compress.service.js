import { createBrotliCompress } from 'zlib';
import { createReadStream, createWriteStream } from 'fs';
import { pipeline } from 'stream';
import { createPath } from '../helpers/path.helper.js';
import { printOperationError } from './log.service.js';

const compressBrotli = async (pathToFile, pathToDestination) => {
  const source = createReadStream(createPath(pathToFile));
  const dest = createWriteStream(createPath(pathToDestination));
  const gzip = createBrotliCompress();
  pipeline(source, gzip, dest, (err) => {
      if(err) {
          printOperationError(err.message);
          process.exitCode = 1;
      } else {
        console.log('compress succeeded')
      }
  });
};

export { compressBrotli };