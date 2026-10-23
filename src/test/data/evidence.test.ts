/// <reference types="node" />
import { readdirSync, readFileSync } from 'node:fs'
import { resolve, relative, join } from 'node:path'
import { createHash } from 'node:crypto'
import { describe, it, expect } from 'vitest'
import { evidence } from '../../data/evidence'
import { certificates } from '../../data/certificates'
import { gallery } from '../../data/gallery'
function originals(dir:string):string[]{return readdirSync(dir,{withFileTypes:true}).flatMap(entry=>entry.isDirectory()?originals(join(dir,entry.name)):/\.(heic|png|jpe?g|pdf)$/i.test(entry.name)?[join(dir,entry.name)]:[])}
describe('complete Evidence Folder coverage',()=>{
 it('maps every original file to exactly one visible evidence entry',()=>{
  const inputs=originals(resolve('src/assets/evidence/originals')).map(p=>relative(process.cwd(),p)).sort()
  expect(inputs).toHaveLength(12)
  expect(evidence.map(e=>e.sourcePath).sort()).toEqual(inputs)
  expect(new Set(evidence.map(e=>e.sourcePath)).size).toBe(12)
  expect(certificates).toHaveLength(8);expect(gallery).toHaveLength(4)
 })
 it('preserves the current source bytes recorded by the manifest',()=>{
  for(const entry of evidence)expect(createHash('sha256').update(readFileSync(resolve(entry.sourcePath))).digest('hex')).toBe(entry.sourceSha256)
 })
 it('preserves the complete original PDF and previews both pages',()=>{
  const pdf=evidence.find(e=>e.format==='pdf')!
  expect(readFileSync(resolve('src/assets/evidence/anu-award-offer.pdf')).equals(readFileSync(resolve(pdf.sourcePath)))).toBe(true)
  expect(pdf.pages).toHaveLength(2)
  expect(pdf.thumbnail).toBe(pdf.pages![0])
 })
})
