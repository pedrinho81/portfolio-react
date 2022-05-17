import { useState, useRef, useEffect } from 'react';

import { ArrowCircleLeft, ArrowCircleRight } from 'phosphor-react'

// Data
import data from '../database/Projects';


const Carousel = () => {




  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };



  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel  my-12 mx-auto">

      <h2 className="text-black text-2xl sm:text-4xl font-bold leading-8 mb-12 text-center">
        Projects
      </h2>
      <div className="relative overflow-hidden rounded-xl shadow-2xl">
        <div className="flex justify-between absolute center left w-full h-full">
          <button
            onClick={movePrev}
            className="text-white w-10 my-auto h-10  text-center opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"

          >
            <ArrowCircleLeft size={40}
              weight={'bold'} />
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className="text-white w-10 my-auto h-10  text-center opacity-100 disabled:opacity-25 disabled:cursor-not-allowed z-10 p-0 m-0 transition-all ease-in-out duration-300"
          >
            <ArrowCircleRight size={40}
              weight={'bold'} />
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className="carousel-container relative flex gap-1 bg-transparent overflow-scroll bg-scroll scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item relative w-[35rem] h-[35rem] snap-start"
              >
                <a
                  href={resource.link}
                  className="h-full rounded-md w-full bg-cover aspect-square block bg-origin-padding bg-center bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ''})` }}
                >
                  <img
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    className="w-full  aspect-square hidden "
                  />
                </a>
                <a
                  href={resource.link}
                  target="_blank"
                  rel="noreferrer"
                  className="h-full rounded-md w-full aspect-square block absolute top-0 left-0 transition-opacity duration-300 opacity-0 hover:opacity-100 bg-gray-800/75 z-10"
                >
                  <h3 className="text-white py-6 px-3 text-left mx-auto my-8 w-auto font-semibold text-xl md:text-2xl">
                    {resource.title}
                  </h3>
                  <div className="flex flex-wrap">
                   
                 {resource.techsUsed.map((tech, index) => {

                   
                     return (
                    <div key={index} className="flex flex-col w-40 p-10 m-6 overflow-hidden bg-white shadow-2xl rounded-xl sm:w-52">
                        {/* <tech.logo color={tech.color} className="mx-auto text-6xl" />  */}
                        <p className="mt-6 text-xl sm:text-2xl font-semibold text-center">{tech}</p>
                    </div>
                )
               })}
                
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>

  );
};

export default Carousel;