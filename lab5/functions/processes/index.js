import { fork } from 'child_process';
import path from 'path';

const child = fork(path.resolve('E:/Безумие/5 Семестр/СВЧ/dgf/src/functions/processes/spawn.js'));
const query = process.argv.slice(2)[0];

child.on('spawn', () => {
  if (query) {
    child.send(query);
  } else {
    console.error('No query provided');
  }
});

child.on('message', (results) => {
  if (results.error) {
    console.error('Error:', results.error);
  } else {
    console.log('Search Results:', results);
  }

  process.exit(0);
});