import { FunctionComponent } from "react";

const Home: FunctionComponent = () => {
  return (
    <div className="tw-h-[100vh] tw-grid tw-text-center" id="home">
      <div className=" tw-mt-32">
        <h1 className="tw-text-9xl tw-font-bold">Pascal Burri</h1>
        <h2 className="tw-text-4xl tw-font-light">Frontend Developer</h2>
      </div>
    </div>
  );
};

export default Home;