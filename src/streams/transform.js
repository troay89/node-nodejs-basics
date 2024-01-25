import {Transform} from 'node:stream';
import {stdin, stdout} from 'node:process';
import {pipeline} from 'node:stream/promises';

const transform = async () => {
    try {
        const transforms = new Transform({
            transform(chunk, encoding, callback) {
                this.push(chunk.toString().split('').reverse().join('') + '\n');
                callback();
            }
        });
        await pipeline(stdin, transforms, stdout);
    } catch (e) {
        console.log(e.message);
    }
};

await transform();
