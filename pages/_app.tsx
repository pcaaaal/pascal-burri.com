import '@/styles/blob.css';
import '@/styles/blob.css';
import '@/styles/globals.css';
import '@/styles/header.css';
import type {AppProps} from 'next/app';
import {useState} from 'react';
import Blob from '../components/blob';
import Header from '../components/header';

export default function App({Component, pageProps}: AppProps) {
	const [dark, setDark] = useState(false);
	return (
		<div
			className={`tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-bg-white ${dark ? 'tw-dark' : ''} tw-overflow-hidden`}
		>
			<div className='tw-w-full tw-h-full tw-overflow-hidden'>
				<Blob>
						<Header setDark={setDark} dark={dark} />
						<Component {...pageProps} />
				</Blob>
			</div>
		</div>
	);
}
