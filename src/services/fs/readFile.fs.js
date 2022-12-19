import { createReadStream } from 'fs';
import { printOperationError } from '../log.service.js';


const readFile = (path) => {
    const readStream = createReadStream(path);
    let dataFromStream = '';
    readStream.on('data', (chunk) => {
      dataFromStream += chunk;
    })
    readStream.on('end', () => console.log(dataFromStream))
    readStream.on('error', (err) => {
      readStream.close();
      printOperationError(err.message);
    });

}

export {readFile}