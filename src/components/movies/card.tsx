'use client';

import {FC, useState} from 'react';
import {Card, CardContent} from '@/components/ui/card';
import {PlayCircle, Info} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import {useAtom} from 'jotai';
import movieAtom from '@/atoms/movie';
import {Movie} from '@/models/movie';

interface Props {
	movie: Movie;
}

const MovieCard: FC<Props> = ({movie}) => {
	const [isHovered, setIsHovered] = useState(false);

	const [, setMovie] = useAtom(movieAtom);

	const handleClick = () => {
		setMovie(movie);
	};

	return (
		<Card
			className='relative w-[200px] h-[300px] transition-all duration-200 ease-in-out transform hover:scale-110 hover:z-10'
			onMouseEnter={() => setIsHovered(true)}
			onMouseLeave={() => setIsHovered(false)}>
			<CardContent className='p-0'>
				<Image
					src={movie?.poster}
					alt={movie?.title}
					className='w-full h-full object-cover rounded-md'
					width={512}
					height={512}
				/>
				{isHovered && (
					<div className='absolute inset-0 bg-black dark:bg-black/90 bg-opacity-75 flex flex-col justify-end p-4 rounded-md'>
						<h3 className='text-white font-bold mb-2'>{movie?.title}</h3>
						<div className='flex space-x-2'>
							<Link
								href={`/movie/${movie?.id}`}
								onClick={handleClick}
								className='flex items-center justify-center bg-white text-black rounded-full w-8 h-8'>
								<PlayCircle size={20} />
							</Link>
							<Link
								href={`/movie/${movie?.id}`}
								onClick={handleClick}
								className='flex items-center justify-center border border-gray-300 rounded-full w-8 h-8'>
								<Info size={20} className='text-white' />
							</Link>
						</div>
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default MovieCard;
