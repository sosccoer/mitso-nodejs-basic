import { promises as fs } from 'fs';
import { join } from 'path';

const copy = async () => {
    const sourceFolder = join('files');
    const destinationFolder = join('files_copy');

    try {

        await fs.access(sourceFolder);

        try {
            await fs.access(destinationFolder);
            throw new Error('FS operation failed');
        } catch (err) {
            if (err.code !== 'ENOENT') throw err;
        }

        await fs.mkdir(destinationFolder);

        const files = await fs.readdir(sourceFolder);
        for (const file of files) {
            const sourceFile = join(sourceFolder, file);
            const destinationFile = join(destinationFolder, file);

            await fs.copyFile(sourceFile, destinationFile);
        }
    } catch (err) {
        throw err;
    }
};

await copy();
