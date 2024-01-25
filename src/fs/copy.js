import {mkdir, readdir, copyFile } from 'node:fs/promises';
import {join} from 'node:path';

const PATH_FS = join('.', 'src', 'fs');
const PATH_FILE = join(PATH_FS, 'files');
const PATH_COPY_FILE = join(PATH_FS, 'files_copy');

const copy = async () => {
    try {
        const folder = await readdir(PATH_FS);
        if (folder.includes('files_copy') || !folder.includes('files')) throw Error('FS operation failed');
        await mkdir(PATH_COPY_FILE);
        const files = await readdir(PATH_FILE);
        for(const file of files) {
            await copyFile(join(PATH_FILE, file), join(PATH_COPY_FILE, file));
        }
    }catch (err) {
        console.error(err.message);
    }
};

await copy();
