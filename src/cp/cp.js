import { spawn } from 'node:child_process';
import {join} from 'node:path';

const spawnChildProcess = async (args) => {
    spawn('node', [join('.', 'src', 'cp', 'files', 'script.js'), ...args], { stdio: [process.stdin, process.stdout, 'pipe', 'ipc'] });
};

spawnChildProcess(['args1', 'args2']);
