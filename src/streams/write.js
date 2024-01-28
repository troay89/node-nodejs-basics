import {createWriteStream} from 'node:fs'
import {stdin} from 'node:process';
import {join} from 'node:path';
import {pipeline} from 'node:stream/promises';

const write = async () => {
    try {
        const writableStream = createWriteStream(join('src', 'streams', 'files', 'fileToWrite.txt'), {
            encoding: 'utf-8',
            autoClose: true
        })

        console.log('Введите текст.\nНажимите Ctrl + C для выхода\n');

        await pipeline(stdin, writableStream);
    } catch (e) {
        console.log(e.message);
    }
};

await write();
