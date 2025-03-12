import { promises as fs } from 'fs';
import { join } from 'path';

const list = async () => {
    const directoryPath = join('src', 'fs', 'files');

    try {

        await fs.access(directoryPath);


        const files = await fs.readdir(directoryPath);


        console.log(files);
    } catch (err) {
        throw new Error('FS operation failed');
    }
};

await list();