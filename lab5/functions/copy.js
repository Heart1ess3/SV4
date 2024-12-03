import { copyFile } from 'node:fs/promises';
import { Constants } from '../constants.js';

try {
  await copyFile(Constants.DataUsersPath, Constants.DataCopiedUsersPath);
  console.log('success!');
} catch {
  console.error('The file could not be copied');
}