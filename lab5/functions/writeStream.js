import fs from 'node:fs';
import { v4 as uuidv4 } from 'uuid';
import { Constants } from '../constants.js';

const addUserAsync = async (user) => {
  try {
    const userToCreate = {
      id: uuidv4(),
      ...user
    };

    const readStream = fs.createReadStream(Constants.DataUsersPath, { encoding: 'utf-8' });
    let jsonData = '';

    readStream.on('data', (chunk) => {
      jsonData += chunk;
    });

    readStream.on('end', async () => {
      let users = [];

      if (jsonData) {
        users = JSON.parse(jsonData);
      }

      users.push(userToCreate);

      const writeStream = fs.createWriteStream(Constants.DataUsersPath, { flags: 'w', encoding: 'utf-8' });
      writeStream.write(JSON.stringify(users, null, 2));

      writeStream.on('finish', () => {
        console.log('Users updated successfully:', users);
      });

      writeStream.on('error', (err) => {
        console.error('Error writing file:', err);
      });

      writeStream.end();

      await fs.promises.writeFile(`${Constants.DataUserPath}/user_${userToCreate.id}.json`, JSON.stringify(userToCreate, null, 2));
    });

    readStream.on('error', (err) => {
      console.error('Error reading file:', err);
    });
  } catch (err) {
    console.error('Error adding user:', err);
  }
};

const args = process.argv.slice(2);

await addUserAsync({
  firstName: args[0],
  lastName: args[1],
  description: args[2]
});
