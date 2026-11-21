import { execFileSync } from 'node:child_process';
import { cp, mkdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const astroDir = path.join(root, 'astro-demo', 'site');
const astroOutput = path.join(astroDir, 'dist');
const mkdocsOutput = path.join(root, 'mkdocs-demo', 'site');
const combinedMkdocsOutput = path.join(astroOutput, 'mkdocs');
function run(command, args, cwd) {
  if (process.platform === 'win32' && command === 'npm') {
    execFileSync('cmd.exe', ['/d', '/s', '/c', `npm.cmd ${args.join(' ')}`], { cwd, stdio: 'inherit' });
    return;
  }
  execFileSync(command, args, { cwd, stdio: 'inherit' });
}

run('node', ['scripts/sync-content.mjs'], root);
run('npm', ['ci'], astroDir);
run('npm', ['run', 'build'], astroDir);

let python;
if (process.platform === 'win32') {
  const localPython = path.join(root, 'mkdocs-demo', '.venv', 'Scripts', 'python.exe');
  try {
    await access(localPython);
    python = localPython;
  } catch {
    python = 'python';
    run(python, ['-m', 'pip', 'install', '-r', 'mkdocs-demo/requirements.txt'], root);
  }
} else {
  python = 'python3';
  run(python, ['-m', 'pip', 'install', '-r', 'mkdocs-demo/requirements.txt'], root);
}

run(python, ['-m', 'mkdocs', 'build', '--config-file', 'mkdocs-demo/mkdocs.yml'], root);
await mkdir(combinedMkdocsOutput, { recursive: true });
await cp(mkdocsOutput, combinedMkdocsOutput, { recursive: true, force: true });

console.log('Built Astro at / and MkDocs at /mkdocs/.');
