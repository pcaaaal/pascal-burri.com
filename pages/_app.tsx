import '@/styles/globals.css';
import '@/styles/blob.css';
import type {AppProps} from 'next/app';
import Header from '../components/header';
import {useState} from 'react';
import Blob from '../components/blob';

export default function App({Component, pageProps}: AppProps) {
	const [dark, setDark] = useState(false);
	return (
		<div
			className={`tw-w-[100vw] tw-h-[100vh] tw-flex tw-flex-col tw-items-center tw-bg-white ${dark ? 'tw-dark' : ''}`}
		>
			<Blob>
				<div className="tw-relative">
					<Header setDark={setDark} />
					<Component {...pageProps} />
				</div>
			</Blob>
		</div>
	);
}
