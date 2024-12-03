import { rename } from 'node:fs/promises';
import path from 'node:path';

const renameAsync = async () => {
  const requestedFileName = process.argv.slice(2)[0];
  
  if(!requestedFileName){
    throw new Error("Provide correct filename")
  }

  let fileNameWithExtension = requestedFileName;
  if (!fileNameWithExtension?.endsWith('.js')) {
    fileNameWithExtension += '.js';
  }
  
  const newFileName = path.resolve(import.meta.dirname, fileNameWithExtension);
  
  try {
    await rename(import.meta.filename, newFileName);
    console.log('success!');
  } catch {
    console.error('The file could not be copied');
  }
}

await renameAsync();

