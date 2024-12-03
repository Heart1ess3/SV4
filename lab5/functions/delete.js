import { readFile, writeFile } from 'node:fs/promises';
import { Constants } from '../constants.js'

const deleteAsync = async() => {
  try {
    const userId = process.argv.slice(2)[0];
    const jsonUsers = await readFile(Constants.DataUsersPath, 'utf-8');
    let users = [];

    if (jsonUsers) {
      users = JSON.parse(jsonUsers);
    }

    const userExists = users.some(user => user.id === userId);

    if(userExists) {
      users = users.filter(user => user.id !== userId)
    }
    console.log(users)
    await writeFile(Constants.DataUsersPath, JSON.stringify(users, null, 2));

    console.log('User deleted successfully:');
  } catch (err) {
    console.error('Error deleting user:', err);
  }
}

deleteAsync();