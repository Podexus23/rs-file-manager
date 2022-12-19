import { createReadStream } from 'fs';
import { createPath } from '../helpers/path.helper.js';
const { createHash } = await import('node:crypto')

const calcHash = (pathToFile) => {
  const input = createReadStream(createPath(pathToFile));
  const hash = createHash('sha256');

  input.pipe(hash);
  input.on('end', () => console.log(hash.digest('hex')));
}

export {calcHash}