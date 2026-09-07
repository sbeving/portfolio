// Pulls the three most recent posts from the blog and writes them into
// src/data/latest-posts.json, which the Blog component imports.
//
// This runs at build time on purpose: the blog serves no Access-Control-Allow-Origin
// header, so the browser cannot fetch the feed directly, and the page is a client
// component so it cannot fetch on the server either.
//
// If the fetch fails the existing JSON is left untouched, so a network blip during
// CI never empties the section or breaks the build.
import { writeFileSync, existsSync, readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const BLOG = 'https://blog.saleheddinetouil.tech';
const OUT = join(dirname(fileURLToPath(import.meta.url)), '..', 'src', 'data', 'latest-posts.json');

const decode = (s) =>
  s.replace(/^<!\[CDATA\[|\]\]>$/g, '')
   .replace(/&apos;|&#39;/g, "'").replace(/&quot;/g, '"')
   .replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').trim();

const tag = (body, name) => {
  const m = body.match(new RegExp(`<${name}[^>]*>([\\s\\S]*?)</${name}>`));
  return m ? decode(m[1]) : '';
};

try {
  const res = await fetch(`${BLOG}/rss.xml`);
  if (!res.ok) throw new Error(`feed responded ${res.status}`);
  const xml = await res.text();

  const posts = [...xml.matchAll(/<item>([\s\S]*?)<\/item>/g)].slice(0, 3).map(([, body]) => {
    const link = tag(body, 'link');
    const slug = link.replace(/\/$/, '').split('/').pop();
    const pub = tag(body, 'pubDate');
    return {
      title: tag(body, 'title'),
      description: tag(body, 'description'),
      link,
      slug,
      image: `${BLOG}/covers/${slug}.jpg`,
      date: pub
        ? new Date(pub).toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })
        : '',
    };
  });

  if (!posts.length) throw new Error('feed contained no items');
  writeFileSync(OUT, JSON.stringify(posts, null, 2) + '\n');
  console.log(`latest-posts.json updated (${posts.length} posts)`);
} catch (err) {
  console.warn(`[fetch-posts] ${err.message} - keeping the committed copy`);
  if (!existsSync(OUT)) writeFileSync(OUT, '[]\n');
}
