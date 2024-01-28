import { Worker } from 'node:worker_threads';
import {cpus} from 'node:os';
import {join} from 'node:path';
import { fileURLToPath } from 'node:url';
import { dirname } from 'node:path';

const performCalculations = async () => {
    const _dirname = fileURLToPath(dirname(import.meta.url));
    const PATH = join(_dirname, 'worker.js');
    const countCPUs = cpus().length;
    const threads = new Array(countCPUs);
    const results = new Array(countCPUs);

    for (let i = 0; i < countCPUs; i++) {
        threads[i] = new Worker(PATH);
        threads[i].postMessage(10 + i);

        threads[i].on('message', (result) => {
            results[i] = result;
            threads[i].terminate();
        });

        threads[i].on('error', () => {
            results[i] = { status: 'error', data: null };
        });

        threads[i].on('exit', () => {
            if (results[i] === undefined) {
                results[i] = { status: 'error', data: null };
            }
        });
    }

    await Promise.all(threads.map(worker => new Promise((resolve) => {
        worker.on('message', resolve);
    })));

    console.log(results);
};

await performCalculations();
