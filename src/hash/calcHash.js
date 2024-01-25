const {createHash} = await import('node:crypto');
import {createReadStream} from 'node:fs';
import {join} from 'node:path';
import {pipeline} from 'node:stream/promises';

const calculateHash = async () => {
    try {
        const hash = createHash('sha256');
        const readableStream = createReadStream(join('src', 'hash', 'files', 'fileToCalculateHashFor.txt'), {
            encoding: 'utf-8',
            autoClose: true
        });
        await pipeline(readableStream, hash);
        console.log(hash.digest('hex'));
    }catch (e) {
        console.log(e.message);
    }

};

await calculateHash();
