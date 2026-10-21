import {describe,it,expect} from 'vitest'
import {parseJournalPostHash,createJournalPostHref} from './journal'
describe('static case-study routing',()=>{
 it('preserves case-study routes',()=>expect(parseJournalPostHash(createJournalPostHref('flood-mapping'))).toBe('flood-mapping'))
 it('ignores other anchors',()=>expect(parseJournalPostHash('#projects')).toBeUndefined())
 it('does not crash on malformed URL encoding',()=>expect(parseJournalPostHash('#/journal/%broken')).toBeUndefined())
})
