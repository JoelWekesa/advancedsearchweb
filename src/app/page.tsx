import LandingComponent from '@/components/landing.tsx';
import getMovies from '@/services/movies/paginated';

const Home = async () => {
	const movies = await getMovies({
		page: '1',
		limit: '1000',
	});

	return (
		<div className='container mx-auto mt-4'>
			<LandingComponent movies={movies} />
		</div>
	);
};

export default Home;
