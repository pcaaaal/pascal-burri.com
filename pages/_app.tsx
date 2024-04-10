import '@/styles/globals.css';
import '@/styles/blob.css';
import '@/styles/header.css';
import type {AppProps} from 'next/app';
import Header from '../components/header';
import {useState} from 'react';
import Blob from '../components/blob';

export default function App({Component, pageProps}: AppProps) {
	const [dark, setDark] = useState(false);
	return (
		<div
			className={`tw-w-[100vw] tw-h-[100vh] tw-flex tw-flex-col tw-items-center tw-bg-white ${dark ? 'tw-dark' : ''} tw-overflow-hidden`}
		>
			<Blob>
				<div className="tw-relative tw-overflow-hidden">
					<Header setDark={setDark} dark={dark} />
					<Component {...pageProps} />
				</div>
			</Blob>
		</div>
	);
}
