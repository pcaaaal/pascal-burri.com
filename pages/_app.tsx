import '@/styles/globals.css';
import type {AppProps} from 'next/app';
import Header from '../components/header';

export default function App({Component, pageProps}: AppProps) {
	return (
		<div className="tw-bg-white tw-w-[100vw] tw-h-[100vh] tw-flex tw-justify-center">
			<Header />
			<Component {...pageProps} />
		</div>
	);
}
