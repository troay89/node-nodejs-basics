import {writeFile, readdir} from 'node:fs/promises';
import {join} from 'node:path';

const PATH_FILE = join('.', 'src', 'fs', 'files');
const NAME_FILE = 'fresh.txt';
const TEXT = 'I am fresh and young';

const create = async () => {
    try {
        const files = await readdir(PATH_FILE);
        if (!files.includes(NAME_FILE)) {
            await writeFile(join(PATH_FILE, NAME_FILE), TEXT);
        } else {
            throw Error('FS operation failed');
        }
    } catch (err) {
        console.error(err.message);
    }
};

await create();
