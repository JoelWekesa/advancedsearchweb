'use client';

import movieAtom from '@/atoms/movie';
import {Button} from '@/components/ui/button';
import {Dialog, DialogContent} from '@/components/ui/dialog';
import {useAtom} from 'jotai';
import {PlayCircle, Plus, ThumbsUp} from 'lucide-react';
import {useRouter} from 'next/navigation';
import {Badge} from '@/components/ui/badge';
import dayjs from 'dayjs';
import Image from 'next/image';

const MovieDialog = () => {
	const [movie, setMovie] = useAtom(movieAtom);
	const router = useRouter();

	const handleClose = () => {
		setMovie(null);
		router.back();
	};

	if (!movie) return null;

	return (
		<Dialog open={!!movie} onOpenChange={handleClose}>
			<DialogContent className='max-w-6xl w-[90vw] max-h-[90vh] p-0 overflow-y-auto'>
				<div className='relative h-full bg-white dark:bg-gray-900 text-gray-900 dark:text-white overflow-y-auto'>
					{/* Hero Image */}
					<div className='relative h-[40vh] md:h-[50vh] w-full'>
						<Image
							src={movie.poster || '/placeholder.svg?height=1080&width=1920&text=No+Image'}
							alt={movie.title}
							layout='fill'
							objectFit='cover'
							priority
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-white via-white/70 to-transparent dark:from-gray-900 dark:via-gray-900/70 dark:to-transparent' />
					</div>

					{/* Content */}
					<div className='relative z-10 px-6 py-8 md:px-12 md:py-12 lg:py-16'>
						<div className='max-w-3xl mx-auto'>
							<h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-4'>{movie.title} Hi</h1>

							<div className='flex items-center space-x-4 mb-6'>
								<Badge variant='secondary'>
									{dayjs(movie.release_date ? new Date(movie.release_date * 1000) : new Date()).format('YYYY')}
								</Badge>
								{/* {movie.runtime && (
									<Badge variant='outline'>
										{Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
									</Badge>
								)} */}
							</div>

							<p className='text-base md:text-lg mb-8'>{movie.overview}</p>

							<div className='flex flex-wrap gap-4 mb-8'>
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

							{movie.genres && movie.genres.length > 0 && (
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
							)}

							{/* {movie.cast && movie.cast.length > 0 && (
								<div>
									<h2 className='text-xl font-semibold mb-2'>Cast</h2>
									<p className='text-gray-700 dark:text-gray-300'>{movie.cast.slice(0, 5).join(', ')}</p>
								</div>
							)} */}
						</div>
					</div>
				</div>
			</DialogContent>
		</Dialog>
	);
};

export default MovieDialog;
