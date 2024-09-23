import Link from "next/link";

const Custom404 = () => {
  return (
    <div className="tw-min-h-screen tw-flex tw-justify-center tw-items-center tw-flex-col">
      <div className=" tw-flex tw-justify-center tw-items-center tw-z-20 tw-relative tw-flex-col">
        <h1 className="xl:tw-text-8xl md:tw-text-5xl tw-text-4xl tw-font-bold">
          404
        </h1>
        <p className="md:tw-text-3xl tw-text-lg tw-text-center">
          Oops! Die Seite die du suchst scheint nicht zu existieren!
        </p>
        <Link
          href="/"
          className="tw-mt-4 md:tw-text-2xl tw-text-lg tw-underline"
        >
          Zurück zur Startseite
        </Link>
      </div>
      <div className="blob tw-flex tw-h-[200px] tw-aspect-square tw-z-0 tw-rounded-full md:tw-hidden tw-blur-3xl tw-left-1"></div>
    </div>
  );
};

export default Custom404;
