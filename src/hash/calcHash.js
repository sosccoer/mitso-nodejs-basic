import { createHash } from 'crypto';
import { readFile } from 'fs/promises';
import path from 'path';

const calculateHash = async () => {
    const filePath = path.resolve('files/fileToCalculateHashFor.txt');
    const fileContent = await readFile(filePath);
    const hash = createHash('sha256').update(fileContent).digest('hex');
    console.log(hash);
};

await calculateHash();