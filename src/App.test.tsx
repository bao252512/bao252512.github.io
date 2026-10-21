import { cleanup, fireEvent, render, screen, within } from '@testing-library/react'
import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import App from './App'
import { certificates } from './data/certificates'

beforeEach(()=>{
 window.history.replaceState(null,'','/')
 vi.spyOn(window,'scrollTo').mockImplementation(()=>{})
 HTMLDialogElement.prototype.showModal=function(){this.setAttribute('open','')}
 HTMLDialogElement.prototype.close=function(){this.removeAttribute('open');this.dispatchEvent(new Event('close'))}
})
afterEach(()=>{cleanup();vi.restoreAllMocks();document.documentElement.removeAttribute('data-motion')})

describe('Gia Bao Data Atlas',()=>{
 it('presents one distinct editorial site and only real navigation actions',()=>{
  render(<App/>);expect(screen.getByRole('heading',{level:1})).toHaveTextContent('Gia Bao')
  for(const id of ['projects','skills','experience','awards','gallery'])expect(document.getElementById(id)).toBeInTheDocument()
  expect(screen.getByRole('link',{name:/Step into my work/})).toHaveAttribute('href','#projects')
  expect(screen.queryByText(/Portfolio style|Engineering snapshot/i)).not.toBeInTheDocument()
  expect(document.querySelector('a[download],a[href$=".docx"],a[href^="mailto:"]')).toBeNull()
  expect(document.body.textContent).not.toMatch(/r[e]sum[e]/i)
 })
 it('lets a visitor change the conceptual signal layers',()=>{
  render(<App/>);const group=screen.getByRole('group',{name:'Explore the signal field'})
  const signals=within(group).getByRole('button',{name:/Signals/});fireEvent.click(signals)
  expect(signals).toHaveAttribute('aria-pressed','true')
  expect(screen.getByText(/Start with observations/)).toBeInTheDocument()
  fireEvent.click(within(group).getByRole('button',{name:/Perspective/}))
  expect(screen.getByText(/Make the result understandable/)).toBeInTheDocument()
 })
 it('explains satellite concepts without inventing alternative model scores',()=>{
  render(<App/>);const group=screen.getByRole('group',{name:'Explore satellite input concepts'})
  const radar=within(group).getByRole('button',{name:'Radar'});fireEvent.click(radar)
  expect(radar).toHaveAttribute('aria-pressed','true')
  expect(screen.getByText(/Radar signals can reveal water/)).toBeInTheDocument()
  expect(screen.getByText('0.775')).toBeInTheDocument()
  fireEvent.click(within(group).getByRole('button',{name:'Radar + optical'}))
  expect(screen.getByText(/adds complementary context/)).toBeInTheDocument()
 })
 it('steps through and replays the explanatory modelling pipeline',()=>{
  render(<App/>);const step=screen.getByRole('button',{name:'Step through the modelling workflow'})
  fireEvent.click(step);expect(screen.getByText('02 / Feature engineering')).toBeInTheDocument()
  fireEvent.click(step);expect(screen.getByText('03 / Three-model ensemble')).toBeInTheDocument()
  fireEvent.click(step);expect(screen.getByText('04 / Blended prediction')).toBeInTheDocument()
  fireEvent.click(step);expect(screen.getByText('01 / 20 input factors')).toBeInTheDocument()
 })
 it('supports keyboard navigation of the methods tabs',()=>{
  render(<App/>);const ask=screen.getByRole('tab',{name:/Ask/});ask.focus()
  fireEvent.keyDown(ask,{key:'ArrowRight'})
  const explore=screen.getByRole('tab',{name:/Explore/});expect(explore).toHaveFocus();expect(explore).toHaveAttribute('aria-selected','true')
  expect(screen.getByRole('tabpanel')).toHaveTextContent('Let the data complicate the story.')
  fireEvent.keyDown(explore,{key:'End'});expect(screen.getByRole('tab',{name:/Explain/})).toHaveFocus()
  expect(screen.getByRole('tabpanel')).toHaveTextContent('An answer matters when it makes sense.')
 })
 it('pauses all continuous animation through the header control',()=>{
  render(<App/>);fireEvent.click(screen.getByRole('button',{name:'Pause animations'}))
  expect(document.documentElement).toHaveAttribute('data-motion','off')
  expect(screen.getByRole('button',{name:'Enable animations'})).toHaveAttribute('aria-pressed','false')
  fireEvent.click(screen.getByRole('button',{name:'Enable animations'}));expect(document.documentElement).toHaveAttribute('data-motion','on')
 })
 it('starts with motion off when the system requests reduced motion',()=>{
  const original=window.matchMedia
  window.matchMedia=()=>({matches:true,addEventListener:()=>{},removeEventListener:()=>{}} as unknown as MediaQueryList)
  try{render(<App/>);expect(screen.getByRole('button',{name:'Enable animations'})).toHaveAttribute('aria-pressed','false');expect(document.documentElement).toHaveAttribute('data-motion','off')}finally{window.matchMedia=original}
 })
 it('opens evidence in a named native dialog and closes it',()=>{
  render(<App/>);fireEvent.click(screen.getByRole('button',{name:certificates[0].ariaLabel}))
  const dialog=screen.getByRole('dialog',{name:certificates[0].title});expect(dialog).toHaveAttribute('open')
  expect(within(dialog).getByRole('img')).toHaveAttribute('src',certificates[0].file)
  fireEvent.click(within(dialog).getByRole('button',{name:'Close document preview'}))
  expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
 })
 it('closes the mobile navigation with Escape and restores focus',()=>{
  render(<App/>);const button=screen.getByRole('button',{name:'Explore +'});fireEvent.click(button)
  expect(button).toHaveAttribute('aria-expanded','true')
  expect(screen.getByRole('navigation',{name:'Mobile navigation'})).toBeVisible()
  fireEvent.keyDown(document,{key:'Escape'})
  expect(button).toHaveAttribute('aria-expanded','false');expect(button).toHaveFocus()
 })
 it.each([['flood-mapping','Flood Mapping with Satellite Radar','0.775'],['flood-prediction','Regression with a Flood Prediction Dataset','0.86893']])('renders the real %s case study', (slug,title,metric)=>{
  window.history.replaceState(null,'',`#/journal/${slug}`);render(<App/>)
  expect(screen.getByRole('heading',{level:1,name:title})).toBeInTheDocument()
  expect(document.querySelector('.case-prose')).toHaveTextContent(metric)
  expect(screen.getByRole('link',{name:'← Back to the work'})).toHaveAttribute('href','#projects')
  expect(document.body.textContent).not.toMatch(/r[e]sum[e]/i)
 })
 it('handles an unknown project gracefully',()=>{
  window.history.replaceState(null,'','#/journal/missing');render(<App/>)
  expect(screen.getByRole('heading',{level:1})).toHaveTextContent('isn’t on the map')
 })
 it('exposes precise academic values and keeps recognition expandable',()=>{
  render(<App/>);expect(screen.getByRole('img',{name:/GPA: Grade 10 9.2/})).toBeInTheDocument()
  expect(screen.getByText('1600')).toBeInTheDocument();expect(screen.getByText('8.0')).toBeInTheDocument()
  const award=screen.getByText('ANU International Achievement Award').closest('details')!
  expect(award).not.toHaveAttribute('open')
  expect(award).toHaveTextContent('An offer, subject to conditions')
 })
})
