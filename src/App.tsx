import { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Awards from './components/Awards'
import Gallery from './components/Gallery'
import JournalPostPage from './components/JournalPostPage'
import { parseJournalPostHash } from './utils/journal'
import './App.css'

export function PortfolioApp() {
  const [hash, setHash] = useState(() => window.location.hash)
  const [motion, setMotion] = useState(() => !window.matchMedia('(prefers-reduced-motion: reduce)').matches)
  const slug = parseJournalPostHash(hash)
  useEffect(() => {
    const sync = () => setHash(window.location.hash)
    window.addEventListener('hashchange', sync)
    return () => window.removeEventListener('hashchange', sync)
  }, [])
  useEffect(() => {
    const query = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = (event: MediaQueryListEvent) => { if (event.matches) setMotion(false) }
    query.addEventListener('change', sync)
    return () => query.removeEventListener('change', sync)
  }, [])
  useEffect(() => {
    document.documentElement.dataset.motion = motion ? 'on' : 'off'
    if (!motion || !('IntersectionObserver' in window)) return
    document.documentElement.classList.add('reveal-ready')
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add('in-view'); observer.unobserve(entry.target) }
    }), { threshold: .08 })
    document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el))
    return () => { observer.disconnect(); document.documentElement.classList.remove('reveal-ready') }
  }, [motion, slug])
  useEffect(() => {
    const target = hash.startsWith('#/') && !slug ? hash.replace('#/', '') : hash.slice(1)
    const frame = requestAnimationFrame(() => {
      if (slug) { window.scrollTo({ top: 0, behavior: 'instant' }); document.querySelector<HTMLElement>('.case-page h1')?.focus({ preventScroll: true }) }
      else if (target) document.getElementById(target)?.scrollIntoView({ behavior: 'instant' })
    })
    return () => cancelAnimationFrame(frame)
  }, [slug, hash])
  useEffect(() => {
    let frame = 0
    const update = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(() => {
        const length = document.documentElement.scrollHeight - innerHeight
        document.documentElement.style.setProperty('--reading-progress', String(length > 0 ? scrollY / length : 0))
      })
    }
    window.addEventListener('scroll', update, { passive: true }); update()
    return () => { window.removeEventListener('scroll', update); cancelAnimationFrame(frame) }
  }, [])
  return <div className="atlas-site">
    <a className="skip-link" href="#main">Skip to content</a>
    <Navbar motion={motion} onToggleMotion={() => setMotion(value => !value)} />
    <main id="main" tabIndex={-1}>{slug ? <JournalPostPage slug={slug} /> : <><Hero /><About /><Projects /><Skills /><Experience /><Awards /><Gallery /></>}</main>
    <footer className="atlas-footer"><div className="wrap footer-main"><div><p className="eyebrow">THE NEXT QUESTION IS ALREADY OUT THERE.</p><h2>Stay curious.<br /><em>Keep connecting.</em></h2></div><a href="#projects" className="round-link" aria-label="Return to selected projects">↗</a></div><div className="wrap footer-bottom"><span>© 2026 Do Gia Bao</span><span>Built on questions. Grounded in data.</span><a href="#home">Back to the beginning ↑</a></div></footer>
  </div>
}
export default function App(){return <PortfolioApp />}
