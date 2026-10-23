import { evidence } from './evidence'
import type { GalleryItem } from '../types/portfolio'
export const gallery: GalleryItem[] = evidence.filter(item => item.category === 'photo').map(item => ({
 id: item.id, src: item.file, alt: item.alt!, title: item.title, description: item.description
}))
