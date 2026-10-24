/// <reference types="node" />
import { existsSync, readFileSync } from 'node:fs'
import { describe,it,expect } from 'vitest'
import { portfolio, journalPosts } from '../../data/portfolio'

describe('Data Atlas source-grounded content',()=>{
 it('keeps Gia Bao identity and no downloadable document contract',()=>{
  expect(portfolio.profile.name).toBe('Do Gia Bao')
  expect(portfolio.profile.socialLinks).toEqual([])
  expect(Object.keys(portfolio.profile)).not.toContain('r'+'esume')
  expect(existsSync('src/assets/documents/gia-bao-'+'r'+'esume.docx')).toBe(false)
 })
 it('connects both projects to real internal case studies',()=>{
  expect(portfolio.projects.map(p=>p.id)).toEqual(['flood-mapping','flood-prediction'])
  for(const p of portfolio.projects)for(const action of p.actions)expect(journalPosts.some(post=>post.href===action.href)).toBe(true)
 })
 it('preserves validation and correctly separated reported outcomes',()=>{
  expect(journalPosts[0].content).toContain('0.775')
  expect(journalPosts[0].content).toContain('leave-one-event-out')
  expect(journalPosts[1].content).toContain('207th out of 2,794')
  expect(journalPosts[1].content).toContain('0.86893')
  expect(journalPosts[1].content).toContain('non-negative blending')
 })
 it('preserves the distinction between scholarship offer and eligibility',()=>{
  expect(portfolio.awards.find(a=>a.logoText==='ANU')?.tag).toBe('SCHOLARSHIP OFFER')
  expect(portfolio.awards.find(a=>a.logoText==='SYD')?.description).toContain('Eligibility is not an award offer')
  expect(portfolio.certificates).toHaveLength(4)
 })
 it('contains no inherited identity or document references in public content',()=>{
  expect(JSON.stringify(portfolio)).not.toMatch(/nhamhung|Nham Quoc Hung|Torilab|r[e]sum[e]/i)
  for(const p of journalPosts)expect(p.content).not.toMatch(/r[e]sum[e]/i)
  expect(readFileSync('README.md','utf8')).not.toMatch(/r[e]sum[e]/i)
 })
})
