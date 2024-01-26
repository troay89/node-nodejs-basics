import { cpus } from  'node:os';
import { Worker } from 'node:worker_threads'
import {join} from 'node:path';

const performCalculations2 = async () => {
    const countCpus = cpus().length;
    const result = new Array(countCpus)
    const threads = new Array(countCpus)
    for(let i = 0; i < countCpus; i++) {
        threads[i] = new Worker(join('.', 'src', 'test', 'worker.js'));
        threads[i].postMessage(10 + i);
        threads[i].on('message', (answer) => {
            console.log(answer)
            threads[i].terminate()
        })
    }
}

await performCalculations2();
