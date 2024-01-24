import {unlink, readdir} from 'node:fs/promises'
import {join} from 'node:path'

const PATH_FILE = join('.', 'src', 'fs', 'files')
const REMOVE_FAIL = 'fileToRemove.txt'

const remove = async () => {
    try {
        const files = await readdir(PATH_FILE);
        if (files.includes(REMOVE_FAIL)) {
            await unlink(join(PATH_FILE, REMOVE_FAIL))
        } else {
            throw Error('FS operation failed')
        }
    } catch (error) {
        console.error(error.message)
    }
};

await remove();
