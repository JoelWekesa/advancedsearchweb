import {Button} from '@/components/ui/button';
import {Badge} from '@/components/ui/badge';
import {PlayCircle, Plus, ThumbsUp} from 'lucide-react';
import {Movie} from '@/models/movie';
import {FC} from 'react';
import dayjs from 'dayjs';

interface Props {
	movie: Movie;
}

const MovieDetail: FC<Props> = ({movie}) => {
	return (
		<div className='relative min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white'>
			{/* Hero Image */}
			<div
				className='absolute inset-0 bg-cover bg-center z-0'
				style={{
					backgroundImage: `url(${movie.poster})`,
					backgroundSize: 'cover',
					backgroundPosition: 'center',
				}}>
				<div className='absolute inset-0 bg-gradient-to-r from-white via-white/70 to-transparent dark:from-gray-900 dark:via-gray-900/70 dark:to-transparent' />
			</div>

			{/* Content */}
			<div className='relative z-10 container mx-auto px-4 py-16 lg:py-32'>
				<div className='max-w-2xl'>
					<h1 className='text-5xl font-bold mb-4'>{movie.title}</h1>

					<div className='flex items-center space-x-4 mb-4'>
						<Badge variant='secondary'>
							{dayjs(movie.release_date ? new Date(movie.release_date * 1000) : new Date()).format('YYYY')}
						</Badge>
					</div>

					<p className='text-lg mb-6'>{movie.overview}</p>

					<div className='flex space-x-4 mb-8'>
						<Button className='bg-primary text-primary-foreground hover:bg-primary/90'>
							<PlayCircle className='mr-2 h-4 w-4' /> Play
						</Button>
						<Button variant='secondary'>
							<Plus className='mr-2 h-4 w-4' /> My List
						</Button>
						<Button variant='outline'>
							<ThumbsUp className='mr-2 h-4 w-4' /> Rate
						</Button>
					</div>

					<div className='mb-6'>
						<h2 className='text-xl font-semibold mb-2'>Genres</h2>
						<div className='flex flex-wrap gap-2'>
							{movie.genres.map((genre, index) => (
								<Badge key={index} variant='outline'>
									{genre}
								</Badge>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieDetail;
