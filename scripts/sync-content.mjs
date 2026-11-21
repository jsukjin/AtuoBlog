import { cp, mkdir, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const source = path.join(root, 'shared-content', 'posts');
const destinations = [
  path.join(root, 'astro-demo', 'site', 'src', 'content', 'blog'),
  path.join(root, 'mkdocs-demo', 'docs', 'blog'),
];

for (const destination of destinations) {
  await rm(destination, { recursive: true, force: true });
  await mkdir(destination, { recursive: true });
  for (const name of await readdir(source)) {
    if (name.endsWith('.md')) await cp(path.join(source, name), path.join(destination, name));
  }
}

const mkdocsImages = path.join(root, 'mkdocs-demo', 'docs', 'images');
const sourceImages = path.join(root, 'astro-demo', 'site', 'src', 'assets');
await rm(mkdocsImages, { recursive: true, force: true });
await mkdir(mkdocsImages, { recursive: true });
for (const name of ['ai-workflow-hero.webp', 'ai-workflow-inline.webp']) {
  await cp(path.join(sourceImages, name), path.join(mkdocsImages, name));
}

console.log('Synced shared Markdown into Astro and MkDocs.');
