import path from 'path';
import { getHomePath, setHomePath } from './storage.service.js';

const upCommand = () => {
  setHomePath(path.dirname(getHomePath()))
}

export {upCommand}