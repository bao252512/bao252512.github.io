import { evidence } from './evidence'
import type { CertificateEntry } from '../types/portfolio'
export const certificates: CertificateEntry[] = evidence.filter(item => item.category === 'document').map(item => ({
 title: item.title, issuer: item.issuer!, kind: item.kind!, description: item.description,
 file: item.file, format: item.format, thumbnail: item.thumbnail ?? item.file, pages: item.pages,
 logoKey: 'document', logoLabel: item.title, ariaLabel: item.ariaLabel!
}))
