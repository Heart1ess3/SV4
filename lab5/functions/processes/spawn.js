import fs from 'fs/promises';
import { Constants } from "../../constants.js"

const searchUsers = async (query) => {
  try {
    const data = await fs.readFile(Constants.DataUsersPath, 'utf-8');
    const users = JSON.parse(data);

    const results = users.filter(user => 
      user.firstName.includes(query) || 
      user.lastName.includes(query) || 
      user.description.includes(query)
    );

    process.send(results);
  } catch (err) {
    process.send({ error: err.message });
  }
};

process.on('message', (query) => {
  searchUsers(query);
});