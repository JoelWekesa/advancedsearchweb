'use client';

import {Movie} from '@/models/movie';
import MovieCard from './card';
import {FC, Suspense} from 'react';
import {useSearchParams} from 'next/navigation';
import {VirtuosoGrid} from 'react-virtuoso';

export interface MovieProps {
	movies: Movie[];
}

export const MList: FC<MovieProps> = ({movies}) => {
	const query = useSearchParams();

	const search = query.get('search');

	return (
		<div className='bg-white dark:bg-gray-900 min-h-screen p-8'>
			<h2 className='text-gray-900 dark:text-white text-2xl font-bold mb-4'>
				{search && search.length > 0 ? `Showing results for ${search}` : 'Top movies'}
			</h2>
			<VirtuosoGrid
				totalCount={movies.length}
				data={movies}
				listClassName='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pb-6'
				// itemContent={(index) => <MovieCard key={index} movie={movies[index]} />}

				itemContent={(_, movie) => <MovieCard movie={movie} />}
				style={{height: '100vh'}}
			/>
		</div>
	);
};

const MoviesList: FC<MovieProps> = ({movies}) => {
	return (
		<Suspense>
			<MList movies={movies} />
		</Suspense>
	);
};

export default MoviesList;
