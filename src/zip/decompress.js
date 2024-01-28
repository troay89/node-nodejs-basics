import { createReadStream, createWriteStream } from 'node:fs';
import { createGunzip } from 'node:zlib';
import {join} from 'node:path'
import {pipeline} from 'node:stream/promises';

const decompress = async () => {
    try {
        const readStream = createReadStream(join('src', 'zip', 'files', 'archive.gz'));
        const writeStream = createWriteStream(join('src', 'zip', 'files', 'fileToCompress.txt'));
        const gunzip = createGunzip();

        await pipeline(readStream, gunzip, writeStream)
    }catch (e) {
        console.log(e.message)
    }
};

await decompress();
