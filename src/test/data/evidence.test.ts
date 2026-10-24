/// <reference types="node" />
import { readdirSync, readFileSync, existsSync } from 'node:fs'
import { resolve, relative, join } from 'node:path'
import { createHash } from 'node:crypto'
import { describe, it, expect } from 'vitest'
import { evidence } from '../../data/evidence'
import { certificates } from '../../data/certificates'
import { gallery } from '../../data/gallery'
function originals(dir:string):string[]{return readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?originals(join(dir,entry.name)):/\.(heic|png|jpe?g|pdf)$/i.test(entry.name)?[join(dir,entry.name)]:[])}
describe('public evidence coverage',()=>{
 it('maps every original file to exactly one visible evidence entry',()=>{
  const inputs=originals(resolve('src/assets/evidence/originals')).map(p=>relative(process.cwd(),p)).sort()
  expect(inputs).toHaveLength(8)
  expect(evidence.map(e=>e.sourcePath).sort()).toEqual(inputs)
  expect(new Set(evidence.map(e=>e.sourcePath)).size).toBe(8)
  expect(certificates).toHaveLength(4);expect(gallery).toHaveLength(4)
 })
 it('preserves the current source bytes recorded by the manifest',()=>{
  for(const entry of evidence)expect(createHash('sha256').update(readFileSync(resolve(entry.sourcePath))).digest('hex')).toBe(entry.sourceSha256)
 })
 it('excludes the four withheld documents and their public assets',()=>{
  const hidden=['ielts-academic','sat-score','sydney-award-eligibility','anu-award-offer']
  expect(evidence.some(item=>hidden.includes(item.id))).toBe(false)
  for(const file of ['ielts-academic.webp','sat-score.webp','sydney-award-eligibility.webp','anu-award-offer.pdf','anu-award-page-1.webp','anu-award-page-2.webp'])expect(existsSync(resolve('src/assets/evidence',file))).toBe(false)
 })
})
