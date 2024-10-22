import '@/styles/blob.css';
import '@/styles/global.css';
import '@/styles/header.css';
import '@/styles/contact.css';
import type {AppProps} from 'next/app';
import {useEffect, useState} from 'react';
import Header from '../components/Site/Header';
import Background from '../components/Background/Background';

export default function App({Component, pageProps}: AppProps) {
	const [dark, setDark] = useState(true);
	const [themeLoaded, setThemeLoaded] = useState(false);

	useEffect(() => {
		const storedTheme = window.localStorage.getItem('theme');
		if (!storedTheme) {
			window.localStorage.setItem('theme', 'dark');
		}
		setDark(storedTheme === 'dark');
		setThemeLoaded(true);
	}, []);

	if (!themeLoaded) {
		return null; // or a loading spinner if you prefer
	}

	return (
		<div
			className={`tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-bg-neutral-100 ${
				dark ? 'tw-dark' : ''
			} tw-overflow-hidden dark:tw-text-neutral-100 tw-text-neutral-900`}
		>
			<div className="tw-w-full tw-h-full tw-overflow-hidden">
				<Background>
					<Header setDark={setDark} dark={dark} />
					<div className="tw-justify-center tw-items-center">
						{/* <Modal /> */}
					</div>
					<div className="tw-z-20">
						<Component {...pageProps} dark={dark} />
					</div>
				</Background>
			</div>
		</div>
	);
}
