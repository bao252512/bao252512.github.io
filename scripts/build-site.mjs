import { readFileSync, mkdirSync, rmSync, writeFileSync } from 'node:fs'
import { spawnSync } from 'node:child_process'

const { paused } = JSON.parse(readFileSync(new URL('../site-status.json', import.meta.url), 'utf8'))
if (typeof paused !== 'boolean') throw new Error('site-status.json must contain a boolean paused flag')
if (paused) {
  const output = new URL('../dist/', import.meta.url)
  rmSync(output, { recursive: true, force: true })
  mkdirSync(output, { recursive: true })
  const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Temporarily unavailable</title><style>body{margin:0;background:#f7f5ed;color:#25392e;font:18px/1.7 system-ui,sans-serif;min-height:100svh;display:grid;place-items:center}main{max-width:38rem;padding:32px}h1{font-size:clamp(30px,6vw,48px);line-height:1.15;font-weight:500}p{margin-top:24px}</style></head><body><main><h1>Temporarily unavailable</h1><p>This website is currently offline. Please check back later.</p></main></body></html>`
  writeFileSync(new URL('index.html', output), html)
  writeFileSync(new URL('404.html', output), html)
  writeFileSync(new URL('robots.txt', output), 'User-agent: *\nDisallow: /\n')
  console.log('Paused site: built only the temporary-unavailable page; no portfolio or documents included.')
} else {
  const result = spawnSync(process.execPath, [new URL('../node_modules/vite/bin/vite.js', import.meta.url).pathname, 'build'], { stdio: 'inherit' })
  process.exit(result.status ?? 1)
}
