import {readdir} from 'node:fs/promises';
import {join} from 'node:path';

const PATH_FILE = join('.', 'src', 'fs', 'files');

const list = async () => {
    try {
        const files = await readdir(PATH_FILE);
        files.forEach(files => console.log(files));
    } catch (error) {
        error.message = 'FS operation failed';
        console.error(error.message);
    }
};

await list();
