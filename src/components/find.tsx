'use client';

import {Input} from '@/components/ui/input';
import {useDebouncedValue} from '@/lib/hooks';
import {cn} from '@/lib/utils';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import {FC, useEffect, useRef, useState} from 'react';

interface Props {
	placeholder: string;
}

const inputClasses = cn(
	'min-w-14 md:max-w-full appearance-none rounded-md border py-2 pl-4 pr-10 md:pl-2 md:pr-8 lg:pl-4 lg:pr-10 transition-opacity inline-block'
);

export const SearchInput: FC<Props> = ({placeholder}) => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const searchParamQuery = searchParams.get('search') ?? '';

	const [query, setQuery] = useState(searchParamQuery);
	const [, debouncedQuery] = useDebouncedValue(query, 100);
	const inputRef = useRef<HTMLInputElement | null>(null);

	useEffect(() => {
		router.prefetch(`/movies?search=${encodeURIComponent(query)}`);
	}, [query, router]);

	useEffect(() => {
		if (debouncedQuery) {
			router.push(`/movies?search=${encodeURIComponent(query)}`, {scroll: false});
			inputRef?.current?.focus();
		}
	}, [debouncedQuery, query, router]);

	// useEffect(() => {
	// 	if (pathname === `/movies` && !query) {
	// 		router.push(`/`, {scroll: false});
	// 	}
	// }, [pathname, query, router]);

	useEffect(() => {
		if (pathname !== `/movies`) {
			setQuery('');
		}
	}, [pathname]);

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.focus();
		}
	}, [query]);

	return (
		<Input
			onChange={(e) => {
				const query = e.target.value;
				setQuery(query);
			}}
			className={inputClasses}
			placeholder={placeholder}
			type='search'
			enterKeyHint='search'
			name='search'
			value={query}
			autoComplete='off'
		/>
	);
};
