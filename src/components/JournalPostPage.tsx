import ReactMarkdown from 'react-markdown'
import { getLocalJournalPostBySlug } from '../data/journalPosts'
export default function JournalPostPage({slug}:{slug:string}){
 const post=getLocalJournalPostBySlug(slug)
 if(!post)return <section className="case-page wrap"><a className="text-link" href="#projects">← Back to the work</a><h1 tabIndex={-1}>That investigation<br /><em>isn’t on the map.</em></h1><p>Choose one of the two selected projects to continue exploring.</p></section>
 return <article className="case-page wrap"><a className="text-link" href="#projects">← Back to the work</a><div className="case-heading"><p className="eyebrow">FIELD NOTES / {post.category} / {post.publishedDate}</p><h1 tabIndex={-1}>{post.title}</h1><p>{post.summary}</p><div className="tags">{post.topics.map(t=><span key={t}>{t}</span>)}</div></div><div className="case-layout"><aside><p className="eyebrow">IN THIS INVESTIGATION</p><p>Question → approach<br />Validation → reflection</p><span className="case-side-note">Self-reported project work.<br />Claims and limitations are kept visible.</span></aside><div className="case-prose"><ReactMarkdown components={{h1:({children})=><h2>{children}</h2>,h2:({children})=><h2>{children}</h2>}}>{post.content}</ReactMarkdown><a className="button-dark" href="#projects">Explore the other project ↗</a></div></div></article>
}
