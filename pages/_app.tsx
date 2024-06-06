import '@/styles/blob.css';
import '@/styles/global.css';
import '@/styles/globals.css';
import '@/styles/header.css';
import type {AppProps} from 'next/app';
import {useState} from 'react';
import Header from '../components/Site/Header';
import Modal from '../components/modal';
import Background from '../components/Background/Background';

export default function App({Component, pageProps}: AppProps) {
	const [dark, setDark] = useState(true);
	return (
		<div
			className={`tw-w-full tw-h-full tw-flex tw-flex-col tw-items-center tw-bg-white ${dark ? 'tw-dark' : ''} tw-overflow-hidden dark:tw-text-white tw-text-black`}
		>
			<div className="tw-w-full tw-h-full tw-overflow-hidden">
				<Background>
					<Header setDark={setDark} dark={dark} />
					<div className=" tw-justify-center tw-items-center">
						<Modal />
					</div>
					<div className="tw-z-20">
						<Component {...pageProps} />
					</div>
				</Background>
			</div>
		</div>
	);
}
