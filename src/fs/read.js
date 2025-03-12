import { promises as fs } from 'fs';
import { join } from 'path';

const read = async () => {
    const filePath = join('src', 'fs', 'files', 'fileToRead.txt');

    try {
        const data = await fs.readFile(filePath, 'utf-8');
        console.log(data);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await read();