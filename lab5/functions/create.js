import fs from 'node:fs/promises'
import { v4 as uuidv4 } from 'uuid';
import { Constants } from '../constants.js';


const createAsync = async (user) => {
  try {
    const userToCreate = {
      id: uuidv4(),
      ...user
    };

    const jsonUsers = await fs.readFile(Constants.DataUsersPath, 'utf-8');
    let users = [];

    if (jsonUsers) {
      users = JSON.parse(jsonUsers);
    }

    users.push(userToCreate);

    await fs.writeFile(Constants.DataUsersPath, JSON.stringify(users, null, 2));

    await fs.writeFile(`${Constants.DataUserPath}/user_${userToCreate.id}.json`, JSON.stringify(userToCreate, null, 2));
    
    console.log('User created successfully:', userToCreate);
  } catch (err) {
    console.error('Error creating user:', err);
  }
};

const args = process.argv.slice(2);

await createAsync({
  firstName: args[0],
  lastName: args[1],
  description: args[2]})