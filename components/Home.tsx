import {FunctionComponent} from 'react';

const Home: FunctionComponent = () => {
	return (
		<div className="tw-h-[100vh] tw-grid tw-text-center" id="home">
			<div className=" tw-mt-32">
				<h1 className="md:tw-text-9xl tw-text-8xl tw-font-bold">
					Pascal Burri
				</h1>
				<h2 className="md:tw-text-5xl tw-text-4xl tw-font-light">
					Developer
				</h2>
			</div>
		</div>
	);
};

export default Home;
