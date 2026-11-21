import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'shared-content', 'posts');
const destinations = [
  path.join(root, 'astro-demo', 'site', 'src', 'content', 'blog'),
];

for (const destination of destinations) {
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  for (const name of await readdir(source)) {
    if (name.endsWith('.md')) await cp(path.join(source, name), path.join(destination, name));
  }
}

console.log('Synced shared Markdown into Astro.');
