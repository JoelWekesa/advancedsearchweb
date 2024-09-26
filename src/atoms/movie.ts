import { Movie } from '@/models/movie'
import { atom } from 'jotai'

const movieAtom = atom<Movie | null>(null)


export default movieAtom