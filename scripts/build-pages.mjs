import { execFileSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const astroDir = path.join(root, 'astro-demo', 'site');
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
console.log('Built the Astro blog.');
