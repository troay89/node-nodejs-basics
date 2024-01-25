import { createReadStream, createWriteStream } from 'node:fs';
import { createGzip } from 'node:zlib';
import {join} from 'node:path'
import {pipeline} from 'node:stream/promises';

const compress = async () => {
    try {
        const readStream = createReadStream(join('src', 'zip', 'files', 'fileToCompress.txt'));
        const writeStream = createWriteStream(join('src', 'zip', 'files', 'archive.gz'));
        const gzip = createGzip();

        await pipeline(readStream, gzip, writeStream)
    }catch (e) {
        console.log(e.message)
    }
};

await compress();
