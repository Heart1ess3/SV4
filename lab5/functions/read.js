import { readFile } from 'node:fs/promises';
import { Constants } from '../constants.js'

const getByIdAsync = async() => {
  try {
    const userId = process.argv.slice(2)[0];
    const jsonUsers = await readFile(Constants.DataUsersPath, 'utf-8');
    let user = {};
    let users = [];

    if (jsonUsers) {
      users = JSON.parse(jsonUsers);
    }

    const userExists = users.some(user => user.id === userId);

    if(userExists) {
      user = users.find(user => user.id === userId)
      console.log(user)
    }
    else {
      throw new Error("User with this id doesn't exist")
    }

  } catch (err) {
    console.error('Error retreiving user:', err);
  }
}

await getByIdAsync();