import {createReadStream} from 'node:fs'
import {stdout} from 'node:process';
import {join} from 'node:path';
import {pipeline} from 'node:stream/promises';

const read = async () => {
    try {
        const readableStream = createReadStream(join('src', 'streams', 'files', 'fileToRead.txt'), {
            encoding: 'utf-8',
            autoClose: true
        });
        await pipeline(readableStream, stdout)
    } catch (e) {
        console.log(e.message);
    }

};

await read();
