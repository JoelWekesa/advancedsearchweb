import Image from 'next/image';
import React from 'react';
import watchImage from '../public/watch.png';
import {ModeToggle} from './theme-toggle';
import { SearchInput } from './find';

const HomeNav = () => {

    
	return (
		<div className='flex flex-row justify-between items-center w-full'>
			<div className='w-[30%]'>
				<Image src={watchImage} alt='watch' />
			</div>
			<div className='w-[50%]'>
				<SearchInput placeholder="Find a movie"/>
			</div>
			<div className='flex flex-row justify-between w-[10%]'>
				<ModeToggle />
			</div>
		</div>
	);
};

export default HomeNav;
