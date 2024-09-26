'use client';

import useSearchResults from '@/services/movies/search';
import {useSearchParams} from 'next/navigation';
import {FC, Suspense} from 'react';
import HomeNav from '../home-nav';
import MovieList, {MovieProps} from '../movies/list';

const Landing: FC<MovieProps> = ({movies}) => {
	const search = useSearchParams();

	const query = search.get('search');

	const {data} = useSearchResults({query, movies});

	return (
		<div className='flex flex-1 flex-col gap-3'>
			<HomeNav />
			<MovieList movies={data} />
		</div>
	);
};

const LandingComponent: FC<MovieProps> = ({movies}) => {
	return (
		<Suspense>
			<Landing movies={movies} />
		</Suspense>
	);
};

export default LandingComponent;
