import {isAbsolute, join} from 'path';
import { cwd } from 'process';

const createPath = (path) => isAbsolute(path) ? path : join(cwd(), path);

export { createPath };