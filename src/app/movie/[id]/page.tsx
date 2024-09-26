import MovieDetail from '@/components/movies/movie-detail';
import getMovie from '@/services/movies/movie';
import {redirect} from 'next/navigation';
import React, {FC} from 'react';

interface Props {
	params: {
		id: string;
	};
}

const MoviePage: FC<Props> = async ({params: {id}}) => {
	const movie = await getMovie({id});

	if (!movie) {
		redirect('/');
	}

	return (
		<div className='container mx-auto'>
			<MovieDetail movie={movie} />
		</div>
	);
};

export default MoviePage;
