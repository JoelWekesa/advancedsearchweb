import LandingComponent from '@/components/landing.tsx';
import { getSearchResults } from '@/services/movies/search';
import { FC } from 'react';
interface Props {
	searchParams?: {[key: string]: string | string[] | undefined};
}

const Home: FC<Props> = async ({searchParams}) => {
	const query = searchParams?.search as string;

	const movies = await getSearchResults({
		query: query ?? '',
	});

	return (
		<div className='container mx-auto mt-4'>
			<LandingComponent movies={movies} />
		</div>
	);
};

export default Home;
