import { homedir } from 'os';
import { join } from 'path';

const userHomePath = homedir();

const USER_DATA = {
  username: 'Guest',
  workingPath: userHomePath,
}

const getHomePath = () => USER_DATA.workingPath;
const setHomePath = (path) => USER_DATA.workingPath = path;
const getUserName = () => USER_DATA.username;
const setUserName = (name) => USER_DATA.username = name;

export { getHomePath, setUserName, getUserName, setHomePath, USER_DATA };