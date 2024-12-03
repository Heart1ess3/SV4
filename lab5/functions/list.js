import { readFile } from 'node:fs/promises';
import { Constants } from '../constants.js';

const getAllAsync = async () => {
  try {
    const jsonUsers = await readFile(Constants.DataUsersPath, 'utf-8');
    let users = [];

    if (jsonUsers) {
      users = JSON.parse(jsonUsers);
    }

    console.log(users);
  } catch (err) {
    console.error('Error creating user:', err);
  }
}

await getAllAsync();