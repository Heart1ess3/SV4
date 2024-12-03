import { createReadStream } from "node:fs"

const streamRead = (filePath) => {
  const jsonData = [];

  const stream = createReadStream(filePath, { encoding: 'utf-8' });

  stream
    .on('data', (chunk) => {
      jsonData.push(...chunk.split('\n'));
    })
    .on('end', () => {
      const fullJsonString = jsonData.join('');
      try {
        const parsedData = JSON.parse(fullJsonString);
        console.log('Parsed JSON data:', parsedData);
      } catch (err) {
        console.error('Error parsing JSON:', err);
      }
    })
    .on('error', (err) => {
      console.error('Error reading file:', err);
    });
}

const filePath = process.argv.slice(2)[0]
streamRead(filePath)


//node streamRead.js ./data/users.json