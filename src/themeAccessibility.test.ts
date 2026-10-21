/// <reference types="node" />
import { readFileSync } from 'node:fs'
import { describe,it,expect } from 'vitest'
const source=readFileSync('src/index.css','utf8'), styles=readFileSync('src/App.css','utf8')
function lum(hex:string){const c=[1,3,5].map(i=>{const x=parseInt(hex.slice(i,i+2),16)/255;return x<=.04045?x/12.92:((x+.055)/1.055)**2.4});return .2126*c[0]+.7152*c[1]+.0722*c[2]}
function ratio(a:string,b:string){const [hi,lo]=[lum(a),lum(b)].sort((x,y)=>y-x);return(hi+.05)/(lo+.05)}
function token(name:string){const v=source.match(new RegExp('--'+name+':(#[0-9a-f]{6})'));if(!v)throw Error(name);return v[1]}
describe('Data Atlas accessibility safeguards',()=>{
 it.each([['ink','paper'],['muted','paper'],['ink','sage'],['muted','sage'],['cream','green']])('%s on %s passes AA contrast',(a,b)=>expect(ratio(token(a),token(b))).toBeGreaterThanOrEqual(4.5))
 it('keeps continuous motion optional and provides system reduced-motion behavior',()=>{
  expect(styles).toContain('@media(prefers-reduced-motion:reduce)')
  expect(styles).toContain('[data-motion=off]')
 })
})
