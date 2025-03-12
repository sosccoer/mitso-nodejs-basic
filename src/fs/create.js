import { promises as fs } from 'fs';
import { join } from 'path';

const create = async () => {
    const folderPath = join('src', 'fs', 'files');
    const filePath = join(folderPath, 'fresh.txt');
    const content = 'какая-то строка';

    try {

        await fs.access(filePath);
        throw new Error('FS operation failed');
    } catch (err) {
        if (err.code === 'ENOENT') {
            await fs.writeFile(filePath, content, 'utf8');
        } else {
            throw err;
        }
    }
};

await create();