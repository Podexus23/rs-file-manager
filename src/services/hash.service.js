import { createReadStream } from 'fs';
import { createPath } from '../helpers/path.helper.js';
import { printOperationError } from './log.service.js';
const { createHash } = await import('node:crypto')

const calcHash = (pathToFile) => {
  try{
    const input = createReadStream(createPath(pathToFile));
    const hash = createHash('sha256');

    input.pipe(hash);
    input.on('error', (err) => {printOperationError(err.message)})
    input.on('end', () => console.log(hash.digest('hex')));
  } catch(err) {
    printOperationError(err.message)
  }
  
}

export {calcHash}