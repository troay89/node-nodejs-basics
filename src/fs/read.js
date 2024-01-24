import {readFile, readdir} from 'node:fs/promises'
import {join} from 'node:path'

const PATH_FILE = join('.', 'src', 'fs', 'files')
const NAME_FILE = 'fileToRead.txt'

const read = async () => {
    try {
        const files = await readdir(PATH_FILE);
        if (files.includes(NAME_FILE)) {
            const content = await readFile(join(PATH_FILE, NAME_FILE), { encoding: 'utf8' })
            console.log(content)
        }else {
            throw Error('FS operation failed')
        }
    }catch (error) {
        console.error(error.message)
    }
};

await read();
