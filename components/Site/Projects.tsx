import ProjectCard from "../ProjectCard";
import data from "../../data";
import { useRouter } from "next/navigation";
import Carousel, { ButtonGroupProps } from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useEffect, useLayoutEffect, useState } from "react";

export default function Projects() {
  const router = useRouter();
  const [screenSize, setScreenSize] = useState<number>(0);

  const updateScreenSize = () => {
    setScreenSize(window.innerWidth);
  };

  useLayoutEffect(() => {
    updateScreenSize();

    const handleResize = () => {
      updateScreenSize();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const cards = data.projects.map((project) => (
    <ProjectCard key={project.title} project={project} />
  ));

  const ButtonGroup = ({ next, previous }: ButtonGroupProps) => {
    return (
      <div className="carousel-button-group tw-flex tw-gap-8 tw-justify-center">
        <button
          className="hover:tw-cursor-pointer tw-transition tw-duration-100 hover:tw-scale-110 active:tw-scale-95"
          onClick={previous}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-h-8 tw-w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ transform: "rotate(-90deg)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
        <button
          className="hover:tw-cursor-pointer tw-transition tw-duration-100 hover:tw-scale-110 active:tw-scale-95"
          onClick={next}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="tw-h-8 tw-w-8 hover:tw-cursor-pointer hover:tw-scale-105 active:tw-scale-95"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            style={{ transform: "rotate(90deg)" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      </div>
    );
  };

  const carouselSettings = {
    additionalTransfrom: 0,
    arrows: false,
    customButtonGroup: <ButtonGroup />,
    renderButtonGroupOutside: true,
    autoPlay: false,
    infinite: true,
    centerMode: screenSize > 1900,
    partialVisible: screenSize <= 1900,
    itemClass: "",
    keyBoardControl: true,
    minimumTouchDrag: 80,
    renderArrowsWhenDisabled: false,
    renderDotsOutside: false,
    responsive: {
      big: {
        breakpoint: {
          max: 3000,
          min: 2048,
        },
        items: 1,
      },
      desktop: {
        breakpoint: {
          max: 2048,
          min: 1444,
        },
        items: 1,
        partialVisibilityGutter: 400,
      },
      laptop: {
        breakpoint: {
          max: 1444,
          min: 767,
        },
        items: 1,
        partialVisibilityGutter: 0,
      },
    },
    rewind: false,
    rewindWithAnimation: false,
    rtl: false,
    shouldResetAutoplay: true,
    showDots: false,
    sliderClass: "",
    slidesToSlide: 1,
    swipeable: true,
  };

  return (
    <div className="tw-flex tw-flex-col">
      <h1 className="tw-text-6xl tw-font-bold tw-mb-0 tw-mt-4 tw-text-center tw-z-10">
        Projekte
      </h1>
      <div className="tw-hidden md:tw-flex md:tw-flex-col">
        <Carousel {...carouselSettings}>{cards}</Carousel>
      </div>
      <div className="tw-flex tw-flex-col tw-items-center tw-justify-center md:tw-hidden pannel-size">
        {cards}
      </div>
    </div>
  );
}
