import {readFile, unlink, writeFile, readdir} from 'node:fs/promises'
import {join} from 'node:path'

const PATH_FILE = join('.', 'src', 'fs', 'files')
const OLD_NAME_FILE = 'wrongFilename.txt'
const NEW_NAME_FILE = 'properFilename.md'

const rename = async () => {
    try {
        const files = await readdir(PATH_FILE);
        if (files.includes(OLD_NAME_FILE) && !files.includes(!NEW_NAME_FILE)) {
            const content = await readFile(join(PATH_FILE, OLD_NAME_FILE), { encoding: 'utf8' })
            await unlink(join(PATH_FILE, OLD_NAME_FILE))
            await writeFile(join(PATH_FILE, NEW_NAME_FILE), content, { encoding: 'utf8' })
        }else {
            throw Error('FS operation failed')
        }
    }catch (error) {
        console.error(error.message)
    }
};

await rename();
